import {FileModel} from "@/models/FileModel";
import {MouseEvent, useEffect, useReducer, useRef, useState} from "react";
import {TableCell} from "@/components/TableCell";
import {tableSelectionReducer} from "@/models/TableSelection";
import {parseCSV, stringifyCSV} from "@/models/CSVParser";
import {TableColumnHeader} from "@/components/TableColumnHeader";
import {TableRowHeader} from "@/components/TableRowHeader";
import {TableAllHeader} from "@/components/TableAllHeader";
import {IMenu, Menu} from "@/components/Menu";
import {Cell} from "@/models/Cell";
import {CSV} from "@/models/CSV";
import {TableCellMenuBuilder} from "@/components/TableCellMenuBuilder";
import {useKeyDownRepeater} from "@/models/KeyDownRepeater";

export function TableEditor({file}: {
    file: FileModel
}) {
    const [fileId, setFileId] = useState(-1);
    const csvState = useState<CSV>([]);
    const [csv, setCsv] = csvState;
    const mouseDownState = useState<[...Cell, boolean?]>([-1, -1]);
    const [mouseDown, setMouseDown] = mouseDownState;
    const cellEditState = useState<Cell>([-1, -1]);
    const navKeyRepeater = useKeyDownRepeater();
    const selectionReducer = useReducer(tableSelectionReducer, {file});
    const [selection, select] = selectionReducer;
    const [contextMenu, setContextMenu] = useState<IMenu>();
    const editor = useRef<HTMLDivElement>(null);
    const menuBuilder = new TableCellMenuBuilder(csvState, cellEditState, selectionReducer);

    useEffect(() => {
        if (mouseDown) {
            window.addEventListener("mouseup", onMouseUp, false);
        }
        return () => {
            window.removeEventListener("mouseup", onMouseUp, false);
        }
    });

    useEffect(() => {
        if (!selection.file.tableSelection.hasFocus()) {
            select({action: "setFocus", rowIndex: 0, cellIndex: 0});
        }
    });

    useEffect(() => {
        stringifyCSV(csv).then(text => file.textContent = text);
    }, [csv, file]);

    if (selectionReducer[0].file !== file) {
        setMouseDown([-1, -1]);
        selectionReducer[1]({file: file, action: "update"});
    }

    if (fileId !== file.id) {
        setFileId(file.id);
        parseCSV(file.textContent).then(records => setCsv(records));
    }

    function onMouseUp() {
        setMouseDown([-1, -1]);
    }

    async function onCellEdit(rowIndex: number, cellIndex: number, value: string) {
        csv[rowIndex][cellIndex] = value;
        setCsv([...csv]);
    }

    function onCellMenu(event: MouseEvent, rowIndex: number, cellIndex: number) {
        event.preventDefault();
        if (!editor.current) {
            return;
        }
        const b = editor.current.querySelector('table.content')!.getBoundingClientRect();
        const h = (editor.current.querySelector('table.columns') as HTMLElement).offsetHeight;
        const v = editor.current.offsetHeight;
        setContextMenu({
            items: menuBuilder.buildMenu(rowIndex, cellIndex),
            x: event.clientX - (b.x ?? 0),
            y: event.clientY - (b.y ?? 0) + h,
            viewportWidth: b.width,
            viewportHeight: v,
            remove: () => setContextMenu(undefined),
            keyAction: e => {
                const tableSelection = selection.file.tableSelection;
                if (tableSelection.hasFocus()) {
                    return menuBuilder.keyAction(e, tableSelection.focusRow, tableSelection.focusCell);
                }
            }
        });
    }

    return (
        <div className="table-editor" ref={editor}>
            {csv.length > 0 && (
                <table className="columns">
                    <thead>
                    <tr>
                        <TableAllHeader csvState={csvState} selectionReducer={selectionReducer}
                                        onMenu={event => onCellMenu(event, -1, -1)}/>
                        {csv[0].map((cell, cellIndex) =>
                            <TableColumnHeader key={cellIndex} cellIndex={cellIndex} csv={csv} selectionReducer={selectionReducer}
                                               onMenu={event => onCellMenu(event, -1, cellIndex)}/>)}
                    </tr>
                    </thead>
                </table>
            )}
            <table className="content">
                <tbody>
                {csv.map((row, rowIndex) =>
                    <tr key={rowIndex} style={{zIndex: csv.length - rowIndex}}>
                        <TableRowHeader rowIndex={rowIndex} csv={csv} selectionReducer={selectionReducer}
                                        onMenu={event => onCellMenu(event, rowIndex, -1)}/>
                        {
                            row.map((cell, cellIndex) =>
                                <TableCell key={cellIndex} csvState={csvState} rowIndex={rowIndex} cellIndex={cellIndex} selectionReducer={selectionReducer}
                                           mouseDownState={mouseDownState} cellEditState={cellEditState} keyDownRepeater={navKeyRepeater} menuBuilder={menuBuilder}
                                           onEdit={value => onCellEdit(rowIndex, cellIndex, value)}
                                           onMenu={event => onCellMenu(event, rowIndex, cellIndex)}/>)
                        }
                    </tr>
                )}
                </tbody>
            </table>
            {contextMenu && <Menu {...contextMenu}/>}
        </div>
    );
}