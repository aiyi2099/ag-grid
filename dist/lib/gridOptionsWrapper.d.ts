// Type definitions for ag-grid v7.3.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
import { RowNode } from "./entities/rowNode";
import { GridOptions, NodeChildDetails, GetContextMenuItems, GetMainMenuItems, ProcessRowParams, ProcessCellForExportParams, GetRowNodeIdFunc, NavigateToNextCellParams, TabToNextCellParams } from "./entities/gridOptions";
import { GridApi } from "./gridApi";
import { ColDef, IAggFunc, ColGroupDef } from "./entities/colDef";
import { ColumnApi } from "./columnController/columnController";
import { IViewportDatasource } from "./interfaces/iViewportDatasource";
import { ICellRendererFunc, ICellRenderer } from "./rendering/cellRenderers/iCellRenderer";
import { IDatasource } from "./rowControllers/iDatasource";
import { GridCellDef } from "./entities/gridCell";
import { IDateComponent } from "./rendering/dateComponent";
export declare class GridOptionsWrapper {
    private static MIN_COL_WIDTH;
    static PROP_HEADER_HEIGHT: string;
    private gridOptions;
    private columnController;
    private eventService;
    private enterprise;
    private frameworkFactory;
    private propertyEventService;
    private fullWidthCellRenderer;
    private groupRowRenderer;
    private groupRowInnerRenderer;
    private domDataKey;
    private agWire(gridApi, columnApi);
    private destroy();
    init(): void;
    private setupCellRenderers();
    getDomDataKey(): string;
    getFullWidthCellRenderer(): {
        new (): ICellRenderer;
    } | ICellRendererFunc | string;
    getGroupRowRenderer(): {
        new (): ICellRenderer;
    } | ICellRendererFunc | string;
    getGroupRowInnerRenderer(): {
        new (): ICellRenderer;
    } | ICellRendererFunc | string;
    isEnterprise(): boolean;
    isRowSelection(): boolean;
    isRowDeselection(): boolean;
    isRowSelectionMulti(): boolean;
    getContext(): any;
    isPivotMode(): boolean;
    isRowModelPagination(): boolean;
    isRowModelVirtual(): boolean;
    isRowModelViewport(): boolean;
    isRowModelDefault(): boolean;
    isFullRowEdit(): boolean;
    isSuppressFocusAfterRefresh(): boolean;
    isShowToolPanel(): boolean;
    isToolPanelSuppressRowGroups(): boolean;
    isToolPanelSuppressValues(): boolean;
    isToolPanelSuppressPivots(): boolean;
    isToolPanelSuppressPivotMode(): boolean;
    isSuppressTouch(): boolean;
    isEnableCellChangeFlash(): boolean;
    isGroupSelectsChildren(): boolean;
    isGroupSelectsFiltered(): boolean;
    isGroupRemoveSingleChildren(): boolean;
    isGroupIncludeFooter(): boolean;
    isGroupSuppressBlankHeader(): boolean;
    isSuppressRowClickSelection(): boolean;
    isSuppressCellSelection(): boolean;
    isSuppressMultiSort(): boolean;
    isGroupSuppressAutoColumn(): boolean;
    isSuppressDragLeaveHidesColumns(): boolean;
    isForPrint(): boolean;
    isSuppressHorizontalScroll(): boolean;
    isSuppressLoadingOverlay(): boolean;
    isSuppressNoRowsOverlay(): boolean;
    isSuppressFieldDotNotation(): boolean;
    getFloatingTopRowData(): any[];
    getFloatingBottomRowData(): any[];
    isFunctionsPassive(): boolean;
    isSuppressRowHoverClass(): boolean;
    getQuickFilterText(): string;
    isUnSortIcon(): boolean;
    isSuppressMenuHide(): boolean;
    getRowStyle(): any;
    getRowClass(): any;
    getRowStyleFunc(): Function;
    getRowClassFunc(): Function;
    getDoesDataFlowerFunc(): (data: any) => boolean;
    getIsFullWidthCellFunc(): (rowNode: RowNode) => boolean;
    getFullWidthCellRendererParams(): any;
    isEmbedFullWidthRows(): boolean;
    getBusinessKeyForNodeFunc(): (node: RowNode) => string;
    getHeaderCellRenderer(): any;
    getApi(): GridApi;
    getColumnApi(): ColumnApi;
    isEnableColResize(): boolean;
    isSingleClickEdit(): boolean;
    isSuppressClickEdit(): boolean;
    getGroupDefaultExpanded(): number;
    getAutoSizePadding(): number;
    getMaxConcurrentDatasourceRequests(): number;
    getMaxPagesInCache(): number;
    getPaginationOverflowSize(): number;
    getPaginationPageSize(): number;
    getPaginationInitialRowCount(): number;
    getDateComponent(): {
        new (): IDateComponent;
    };
    getRowData(): any[];
    isGroupUseEntireRow(): boolean;
    isEnableRtl(): boolean;
    getGroupColumnDef(): ColDef;
    isGroupSuppressRow(): boolean;
    getRowGroupPanelShow(): string;
    getPivotPanelShow(): string;
    isAngularCompileRows(): boolean;
    isAngularCompileFilters(): boolean;
    isAngularCompileHeaders(): boolean;
    isDebug(): boolean;
    getColumnDefs(): (ColGroupDef | ColDef)[];
    getDatasource(): IDatasource;
    getViewportDatasource(): IViewportDatasource;
    isEnableSorting(): boolean;
    isEnableCellExpressions(): boolean;
    isEnableGroupEdit(): boolean;
    isSuppressMiddleClickScrolls(): boolean;
    isSuppressPreventDefaultOnMouseWheel(): boolean;
    isEnableServerSideSorting(): boolean;
    isSuppressColumnVirtualisation(): boolean;
    isSuppressContextMenu(): boolean;
    isSuppressCopyRowsToClipboard(): boolean;
    isEnableFilter(): boolean;
    isEnableServerSideFilter(): boolean;
    isSuppressScrollLag(): boolean;
    isSuppressMovableColumns(): boolean;
    isAnimateRows(): boolean;
    isSuppressColumnMoveAnimation(): boolean;
    isSuppressMenuColumnPanel(): boolean;
    isSuppressMenuFilterPanel(): boolean;
    isSuppressUseColIdForGroups(): boolean;
    isSuppressAggFuncInHeader(): boolean;
    isSuppressMenuMainPanel(): boolean;
    isEnableRangeSelection(): boolean;
    isRememberGroupStateWhenNewData(): boolean;
    getIcons(): any;
    getAggFuncs(): {
        [key: string]: IAggFunc;
    };
    getIsScrollLag(): () => boolean;
    getSortingOrder(): string[];
    getSlaveGrids(): GridOptions[];
    getGroupRowRendererParams(): any;
    getOverlayLoadingTemplate(): string;
    getOverlayNoRowsTemplate(): string;
    getCheckboxSelection(): (params: any) => boolean;
    isSuppressAutoSize(): boolean;
    isSuppressParentsInRowNodes(): boolean;
    isEnableStatusBar(): boolean;
    isFunctionsReadOnly(): boolean;
    getDefaultColDef(): ColDef;
    getDefaultColGroupDef(): ColGroupDef;
    getHeaderCellTemplate(): string;
    getHeaderCellTemplateFunc(): (params: any) => string | HTMLElement;
    getNodeChildDetailsFunc(): ((dataItem: any) => NodeChildDetails);
    getGroupRowAggNodesFunc(): (nodes: RowNode[]) => any;
    getContextMenuItemsFunc(): GetContextMenuItems;
    getMainMenuItemsFunc(): GetMainMenuItems;
    getRowNodeIdFunc(): GetRowNodeIdFunc;
    getNavigateToNextCellFunc(): (params: NavigateToNextCellParams) => GridCellDef;
    getTabToNextCellFunc(): (params: TabToNextCellParams) => GridCellDef;
    getProcessSecondaryColDefFunc(): (colDef: ColDef) => void;
    getProcessSecondaryColGroupDefFunc(): (colGroupDef: ColGroupDef) => void;
    getSendToClipboardFunc(): (params: any) => void;
    getProcessCellForClipboardFunc(): (params: ProcessCellForExportParams) => any;
    getProcessCellFromClipboardFunc(): (params: ProcessCellForExportParams) => any;
    getViewportRowModelPageSize(): number;
    getViewportRowModelBufferSize(): number;
    setProperty(key: string, value: any): void;
    addEventListener(key: string, listener: Function): void;
    removeEventListener(key: string, listener: Function): void;
    executeProcessRowPostCreateFunc(params: ProcessRowParams): void;
    getHeaderHeight(): number;
    isExternalFilterPresent(): boolean;
    doesExternalFilterPass(node: RowNode): boolean;
    getDocument(): Document;
    getLayoutInterval(): number;
    getMinColWidth(): number;
    getMaxColWidth(): number;
    getColWidth(): number;
    getRowBuffer(): number;
    getScrollbarWidth(): number;
    private checkForDeprecated();
    getLocaleTextFunc(): Function;
    globalEventHandler(eventName: string, event?: any): void;
    getRowHeightAsNumber(): number;
    getRowHeightForNode(rowNode: RowNode): number;
    private isNumeric(value);
}
