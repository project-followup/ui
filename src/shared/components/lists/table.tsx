import type { ReactNode } from "react";

export type ValueExtractor<T> = (item: T) => ReactNode;

export interface TableColumn<T> {
    header: string;
    valueExtractor: ValueExtractor<T>;
    order: number;
}

export interface TableProps<T> {
    className?: string;
    columns: TableColumn<T>[];
    data: T[];
}

export default function TableComponent<T>({ className, columns, data }: TableProps<T>) {
    return (
        <table className={className}>
            <thead>
                <tr>
                    {columns.sort((a, b) => a.order - b.order).map((col, index) => (
                        <th key={index}>{col.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.sort((a, b) => a.order - b.order).map((col, colIndex) => (
                            <td key={colIndex}>{col.valueExtractor(item)}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}