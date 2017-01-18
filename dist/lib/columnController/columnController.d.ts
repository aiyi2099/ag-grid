// Type definitions for ag-grid v7.3.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
import { ColumnGroup } from "../entities/columnGroup";
import { Column } from "../entities/column";
import { ColDef, ColGroupDef } from "../entities/colDef";
import { ColumnGroupChild } from "../entities/columnGroupChild";
import { OriginalColumnGroupChild } from "../entities/originalColumnGroupChild";
export declare class ColumnApi {
    private _columnController;
    sizeColumnsToFit(gridWidth: any): void;
    setColumnGroupOpened(group: ColumnGroup | string, newValue: boolean, instanceId?: number): void;
    getColumnGroup(name: string, instanceId?: number): ColumnGroup;
    getDisplayNameForColumn(column: Column, location: string): string;
    getDisplayNameForColumnGroup(columnGroup: ColumnGroup, location: string): string;
    getColumn(key: any): Column;
    setColumnState(columnState: any): boolean;
    getColumnState(): any[];
    resetColumnState(): void;
    isPinning(): boolean;
    isPinningLeft(): boolean;
    isPinningRight(): boolean;
    getDisplayedColAfter(col: Column): Column;
    getDisplayedColBefore(col: Column): Column;
    setColumnVisible(key: Column | ColDef | String, visible: boolean): void;
    setColumnsVisible(keys: (Column | ColDef | String)[], visible: boolean): void;
    setColumnPinned(key: Column | ColDef | String, pinned: string): void;
    setColumnsPinned(keys: (Column | ColDef | String)[], pinned: string): void;
    getAllColumns(): Column[];
    getAllGridColumns(): Column[];
    getDisplayedLeftColumns(): Column[];
    getDisplayedCenterColumns(): Column[];
    getDisplayedRightColumns(): Column[];
    getAllDisplayedColumns(): Column[];
    getAllDisplayedVirtualColumns(): Column[];
    moveColumn(key: string | Column | ColDef, toIndex: number): void;
    moveColumnByIndex(fromIndex: number, toIndex: number): void;
    moveColumns(columnsToMoveKeys: (Column | ColDef | String)[], toIndex: number): void;
    moveRowGroupColumn(fromIndex: number, toIndex: number): void;
    setColumnAggFunc(column: Column, aggFunc: string): void;
    setColumnWidth(key: Column | string | ColDef, newWidth: number, finished?: boolean): void;
    setPivotMode(pivotMode: boolean): void;
    isPivotMode(): boolean;
    getSecondaryPivotColumn(pivotKeys: string[], valueColKey: Column | ColDef | String): Column;
    setValueColumns(colKeys: (Column | ColDef | String)[]): void;
    getValueColumns(): Column[];
    removeValueColumn(colKey: (Column | ColDef | String)): void;
    removeValueColumns(colKeys: (Column | ColDef | String)[]): void;
    addValueColumn(colKey: (Column | ColDef | String)): void;
    addValueColumns(colKeys: (Column | ColDef | String)[]): void;
    setRowGroupColumns(colKeys: (Column | ColDef | String)[]): void;
    removeRowGroupColumn(colKey: Column | ColDef | String): void;
    removeRowGroupColumns(colKeys: (Column | ColDef | String)[]): void;
    addRowGroupColumn(colKey: Column | ColDef | String): void;
    addRowGroupColumns(colKeys: (Column | ColDef | String)[]): void;
    getRowGroupColumns(): Column[];
    setPivotColumns(colKeys: (Column | ColDef | String)[]): void;
    removePivotColumn(colKey: Column | ColDef | String): void;
    removePivotColumns(colKeys: (Column | ColDef | String)[]): void;
    addPivotColumn(colKey: Column | ColDef | String): void;
    addPivotColumns(colKeys: (Column | ColDef | String)[]): void;
    getPivotColumns(): Column[];
    getLeftDisplayedColumnGroups(): ColumnGroupChild[];
    getCenterDisplayedColumnGroups(): ColumnGroupChild[];
    getRightDisplayedColumnGroups(): ColumnGroupChild[];
    getAllDisplayedColumnGroups(): ColumnGroupChild[];
    autoSizeColumn(key: Column | ColDef | String): void;
    autoSizeColumns(keys: (Column | ColDef | String)[]): void;
    autoSizeAllColumns(): void;
    setSecondaryColumns(colDefs: (ColDef | ColGroupDef)[]): void;
    columnGroupOpened(group: ColumnGroup | string, newValue: boolean): void;
    hideColumns(colIds: any, hide: any): void;
    hideColumn(colId: any, hide: any): void;
    setState(columnState: any): boolean;
    getState(): any[];
    resetState(): void;
    getAggregationColumns(): Column[];
    removeAggregationColumn(colKey: (Column | ColDef | String)): void;
    removeAggregationColumns(colKeys: (Column | ColDef | String)[]): void;
    addAggregationColumn(colKey: (Column | ColDef | String)): void;
    addAggregationColumns(colKeys: (Column | ColDef | String)[]): void;
    setColumnAggFunction(column: Column, aggFunc: string): void;
    getDisplayNameForCol(column: any): string;
}
export declare class ColumnController {
    static GROUP_AUTO_COLUMN_ID: string;
    private gridOptionsWrapper;
    private expressionService;
    private balancedColumnTreeBuilder;
    private displayedGroupCreator;
    private autoWidthCalculator;
    private eventService;
    private columnUtils;
    private gridPanel;
    private context;
    private aggFuncService;
    private primaryBalancedTree;
    private primaryHeaderRowCount;
    private primaryColumns;
    private secondaryBalancedTree;
    private secondaryColumns;
    private secondaryHeaderRowCount;
    private secondaryColumnsPresent;
    private gridBalancedTree;
    private gridColumns;
    private gridHeaderRowCount;
    private displayedLeftColumnTree;
    private displayedRightColumnTree;
    private displayedCentreColumnTree;
    private displayedLeftHeaderRows;
    private displayedRightHeaderRows;
    private displayedCentreHeaderRows;
    private displayedLeftColumns;
    private displayedRightColumns;
    private displayedCenterColumns;
    private allDisplayedColumns;
    private allDisplayedVirtualColumns;
    private rowGroupColumns;
    private valueColumns;
    private pivotColumns;
    private groupAutoColumn;
    private groupAutoColumnActive;
    private ready;
    private logger;
    private pivotMode;
    private scrollWidth;
    private scrollPosition;
    private bodyWidth;
    private leftWidth;
    private rightWidth;
    private bodyWidthDirty;
    private viewportLeft;
    private viewportRight;
    init(): void;
    private setVirtualViewportLeftAndRight();
    getDisplayedColumnsStartingAt(column: Column): Column[];
    private checkDisplayedVirtualColumns();
    setVirtualViewportPosition(scrollWidth: number, scrollPosition: number): void;
    isPivotMode(): boolean;
    setPivotMode(pivotMode: boolean): void;
    getSecondaryPivotColumn(pivotKeys: string[], valueColKey: Column | ColDef | String): Column;
    private setBeans(loggerFactory);
    private setFirstRightAndLastLeftPinned();
    autoSizeColumns(keys: (Column | ColDef | String)[]): void;
    autoSizeColumn(key: Column | String | ColDef): void;
    autoSizeAllColumns(): void;
    private getColumnsFromTree(rootColumns);
    getAllDisplayedColumnGroups(): ColumnGroupChild[];
    getPrimaryColumnTree(): OriginalColumnGroupChild[];
    getHeaderRowCount(): number;
    getLeftDisplayedColumnGroups(): ColumnGroupChild[];
    getRightDisplayedColumnGroups(): ColumnGroupChild[];
    getCenterDisplayedColumnGroups(): ColumnGroupChild[];
    getDisplayedColumnGroups(type: string): ColumnGroupChild[];
    isColumnDisplayed(column: Column): boolean;
    getAllDisplayedColumns(): Column[];
    getAllDisplayedVirtualColumns(): Column[];
    getPinnedLeftContainerWidth(): number;
    getPinnedRightContainerWidth(): number;
    updatePrimaryColumnList(keys: (Column | ColDef | String)[], masterList: Column[], actionIsAdd: boolean, columnCallback: (column: Column) => void, eventType: string): void;
    setRowGroupColumns(colKeys: (Column | ColDef | String)[]): void;
    private setRowGroupActive(active, column);
    addRowGroupColumn(key: Column | ColDef | String): void;
    addRowGroupColumns(keys: (Column | ColDef | String)[]): void;
    removeRowGroupColumns(keys: (Column | ColDef | String)[]): void;
    removeRowGroupColumn(key: Column | ColDef | String): void;
    addPivotColumns(keys: (Column | ColDef | String)[]): void;
    setPivotColumns(colKeys: (Column | ColDef | String)[]): void;
    addPivotColumn(key: Column | ColDef | String): void;
    removePivotColumns(keys: (Column | ColDef | String)[]): void;
    removePivotColumn(key: Column | ColDef | String): void;
    private setPrimaryColumnList(colKeys, masterList, eventName, columnCallback);
    setValueColumns(colKeys: (Column | ColDef | String)[]): void;
    private setValueActive(active, column);
    addValueColumns(keys: (Column | ColDef | String)[]): void;
    addValueColumn(colKey: (Column | ColDef | String)): void;
    removeValueColumn(colKey: (Column | ColDef | String)): void;
    removeValueColumns(keys: (Column | ColDef | String)[]): void;
    private normaliseColumnWidth(column, newWidth);
    private getPrimaryOrGridColumn(key);
    setColumnWidth(key: Column | string | ColDef, newWidth: number, finished: boolean): void;
    setColumnAggFunc(column: Column, aggFunc: string): void;
    moveRowGroupColumn(fromIndex: number, toIndex: number): void;
    moveColumns(columnsToMoveKeys: (Column | ColDef | String)[], toIndex: number): void;
    private doesMovePassRules(columnsToMove, toIndex);
    moveColumn(key: string | Column | ColDef, toIndex: number): void;
    moveColumnByIndex(fromIndex: number, toIndex: number): void;
    getBodyContainerWidth(): number;
    getContainerWidth(pinned: string): number;
    private updateBodyWidths();
    getValueColumns(): Column[];
    getPivotColumns(): Column[];
    isPivotActive(): boolean;
    getRowGroupColumns(): Column[];
    getDisplayedCenterColumns(): Column[];
    getDisplayedLeftColumns(): Column[];
    getDisplayedRightColumns(): Column[];
    getDisplayedColumns(type: string): Column[];
    getAllPrimaryColumns(): Column[];
    getAllGridColumns(): Column[];
    isEmpty(): boolean;
    isRowGroupEmpty(): boolean;
    setColumnVisible(key: Column | ColDef | String, visible: boolean): void;
    setColumnsVisible(keys: (Column | ColDef | String)[], visible: boolean): void;
    setColumnPinned(key: Column | ColDef | String, pinned: string | boolean): void;
    setColumnsPinned(keys: (Column | ColDef | String)[], pinned: string | boolean): void;
    private actionOnGridColumns(keys, action, createEvent);
    getDisplayedColBefore(col: Column): Column;
    getDisplayedColAfter(col: Column): Column;
    isPinningLeft(): boolean;
    isPinningRight(): boolean;
    getPrimaryAndSecondaryAndAutoColumns(): Column[];
    private createStateItemFromColumn(column);
    getColumnState(): any[];
    private orderColumnStateList(columnStateList);
    resetColumnState(): void;
    setColumnState(columnState: any[]): boolean;
    private sortColumnListUsingIndexes(indexes, colA, colB);
    private syncColumnWithNoState(column);
    private syncColumnWithStateItem(column, stateItem, rowGroupIndexes, pivotIndexes);
    getGridColumns(keys: any[]): Column[];
    private getColumns(keys, columnLookupCallback);
    getColumnWithValidation(key: string | ColDef | Column): Column;
    getPrimaryColumn(key: string | ColDef | Column): Column;
    getGridColumn(key: string | ColDef | Column): Column;
    private getColumn(key, columnList);
    getDisplayNameForColumn(column: Column, location: string, includeAggFunc?: boolean): string;
    getDisplayNameForColumnGroup(columnGroup: ColumnGroup, location: string): string;
    private getHeaderName(colDef, column, columnGroup, location);
    private wrapHeaderNameWithAggFunc(column, headerName);
    getColumnGroup(colId: string | ColumnGroup, instanceId?: number): ColumnGroup;
    setColumnDefs(columnDefs: (ColDef | ColGroupDef)[]): void;
    isReady(): boolean;
    private extractRowGroupColumns();
    private extractPivotColumns();
    setColumnGroupOpened(passedGroup: ColumnGroup | string, newValue: boolean, instanceId?: number): void;
    private getColumnGroupState();
    private setColumnGroupState(groupState);
    private calculateColumnsForDisplay();
    private createColumnsToDisplayFromValueColumns();
    private updateDisplayedColumns();
    isSecondaryColumnsPresent(): boolean;
    setSecondaryColumns(colDefs: (ColDef | ColGroupDef)[]): void;
    private processSecondaryColumnDefinitions(colDefs);
    private copyDownGridColumns();
    private clearDisplayedColumns();
    private updateGroupsAndDisplayedColumns();
    private updateDisplayedColumnsFromTrees();
    private setupAllDisplayedColumns();
    private setLeftValues();
    private setLeftValuesOfColumns();
    private setLeftValuesOfGroups();
    private addToDisplayedColumns(displayedColumnTree, displayedColumns);
    private updateDisplayedCenterVirtualColumns();
    getVirtualHeaderGroupRow(type: string, dept: number): ColumnGroupChild[];
    private updateDisplayedVirtualGroups(virtualColIds);
    private updateVirtualSets();
    private filterOutColumnsWithinViewport(columns);
    sizeColumnsToFit(gridWidth: any): void;
    private buildDisplayedTrees(visibleColumns);
    private updateGroups();
    private createGroupAutoColumn();
    private createValueColumns();
    private getWidthOfColsInList(columnList);
    getGridBalancedTree(): OriginalColumnGroupChild[];
}
