// Type definitions for Webix UI v2.4.0
// Project: http://webix.com
// Definitions by: Maksim Kozhukh <http://github.com/mkozhukh>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module webix {
  type WebixTemplate = (...args: any[]) => string;
  type WebixCallback = (...args: any[]) => any;
  interface PromisedData {
    then(handler: (data: any) => any): PromisedData;
  }

  function ajax(): webix._ajax;
  function $$(id: string | Event | HTMLElement): webix.ui.baseview;

  interface _ajax {
    bind(master: any): webix._ajax;
    del(url: string, params?: any, callback?: WebixCallback): PromisedData;
    get(url: string, params?: any, callback?: WebixCallback): PromisedData;
    getXHR(): any;
    headers(values: any): webix._ajax;
    post(url: string, params?: any, callback?: WebixCallback): PromisedData;
    put(url: string, params?: any, callback?: WebixCallback): PromisedData;
    response(type: string): void;
    stringify(data: any): string;
    sync(): webix._ajax;
    master: any;
  }
  interface clipbuffer {
    destructor(): void;
    focus(): void;
    init(): void;
    set(text: string): void;
  }
  interface color {
    hexToDec(hex: string): number;
    hsvToRgb(h: number, s: number, v: number): any[];
    rgbToHsv(r: number, g: number, b: number): any[];
    toHex(number: number, length?: number): string;
    toRgb(rgb: string): any[];
  }
  interface csv {
    parse(text: string, delimiter?: any): any[];
    stringify(data: any[], delimiter?: any): string;
    delimiter: any;
    escape: boolean;
  }
  interface editors {
    $popup: any;
    checkbox: string;
    color: string;
    combo: string;
    date: string;
    'inline-checkbox': string;
    'inline-text': string;
    multiselect: string;
    password: string;
    popup: string;
    richselect: string;
    select: string;
    text: string;
  }
  interface env {
    cssPrefix: string;
    isFF: boolean;
    isIE: boolean;
    isSafari: boolean;
    isWebKit: boolean;
    jsPrefix: string;
    mouse: any;
    strict: boolean;
    svg: boolean;
    transform: boolean;
    transition: boolean;
    transitionDuration: string;
    transitionEnd: string;
    translate: string;
  }
  interface history {
    push(view: string, url: string, value: any): void;
    track(view: string, url: string): void;
  }
  interface html {
    addCss(node: HTMLElement, name: string): void;
    addMeta(name: string, value: string): void;
    addStyle(css: string): void;
    allowSelect(): void;
    create(name: string, attrs: any, html?: string): HTMLElement;
    createCss(data: any): string;
    denySelect(): void;
    getValue(node: HTMLElement): string;
    index(node: HTMLElement): number;
    insertBefore(
      node: HTMLElement,
      before: HTMLElement,
      rescue?: HTMLElement,
    ): void;
    locate(ev: Event | HTMLElement, name: string): string;
    offset(node: HTMLElement): any;
    pos(ev: Event): any;
    posRelative(ev: Event): any;
    preventEvent(ev: Event): boolean;
    remove(node: HTMLElement | HTMLElement[]): void;
    removeCss(node: HTMLElement, name: string): void;
    stopEvent(ev: Event): boolean;
  }
  interface i18n {
    dateFormatDate(date: string): any;
    dateFormatStr(date: any): string;
    fullDateFormatDate(date: string): any;
    fullDateFormatStr(date: Date): string;
    intFormat(num: number): string;
    longDateFormatDate(date: string): any;
    longDateFormatStr(date: any): string;
    numberFormat(number: number): string;
    parseFormatDate(date: string): any;
    parseFormatStr(date: any): string;
    parseTimeFormatDate(date: string): any;
    parseTimeFormatStr(date: any): string;
    priceFormat(number: number): string;
    setLocale(name: string): void;
    timeFormatDate(time: string): any;
    timeFormatStr(date: any): string;
    calendar: any;
    controls: any;
    dateFormat: string;
    decimalDelimiter: string;
    decimalSize: number;
    fileSize: any[];
    fullDateFormat: string;
    groupDelimiter: string;
    groupSize: number;
    locales: any;
    longDateFormat: string;
    parseFormat: string;
    parseTimeFormat: string;
    price: string;
    priceSettings: any;
    timeFormat: string;
  }
  interface locale {
    pager: any;
  }
  interface markup {
    init(node: string, target: string): webix.ui.baseview;
    parse(data: any, datatype: string): void;
    attribute: any;
    dataTag: any;
    namespace: any;
  }
  interface promise {
    all(promise: PromisedData, morepromises?: PromisedData): void;
    defer(): PromisedData;
    fcall(): PromisedData;
    nfcall(): PromisedData;
  }
  interface rules {
    isChecked(): boolean;
    isEmail(): boolean;
    isNotEmpty(): boolean;
    isNumber(): boolean;
  }
  interface cookie {
    clear(): void;
    get(name: string): any;
    put(name: string, value: any): void;
    remove(name: string): void;
  }
  interface local {
    clear(): void;
    get(name: string): any;
    put(name: string, value: any): void;
    remove(name: string): void;
  }
  interface session {
    clear(): void;
    get(name: string): any;
    put(name: string, value: any): void;
    remove(name: string): void;
  }
  interface storage {
    cookie: webix.cookie;
    local: webix.local;
    session: webix.session;
  }

  function alert(text: string, callback: WebixCallback): HTMLElement;
  function animate(html_element: HTMLElement, animation: any): void;
  function attachEvent(
    type: string,
    functor: WebixCallback,
    id?: string,
  ): string;
  function bind(code: WebixCallback, master: any): WebixCallback;
  function blockEvent(): void;
  function callEvent(name: string, params: any[]): boolean;
  function clone(source: any): any;
  function confirm(text: string, callback: WebixCallback): HTMLElement;
  function copy(source: any): any;
  function delay(
    code: WebixCallback,
    owner?: any,
    params?: any[],
    delay?: number,
  ): number;
  function detachEvent(id: string): void;
  function dp(name: string): any;
  function editStop(): void;
  function event(
    node: HTMLElement,
    event: string,
    handler: WebixCallback,
    master?: any,
  ): string;
  function eventRemove(id: string): void;
  function exec(code: string): void;
  function extend(target: any, source: any, overwrite: boolean): any;
  function hasEvent(name: string): boolean;
  function isArray(check: any): boolean;
  function isDate(check: any): boolean;
  function isUndefined(check: any): boolean;
  function jsonp(
    url: string,
    params?: any,
    callback?: WebixCallback,
    master?: any,
  ): void;
  function mapEvent(map: any): void;
  function message(text: string): void;
  function modalbox(text: string, callback: WebixCallback): HTMLElement;
  function once(code: WebixCallback): void;
  function proto(target: any, mixin1?: any, mixinN?: any): any;
  function protoUI(target: any, view: any, mixin1?: any, mixinN?: any): any;
  function proxy(type: string, source: string): any;
  function ready(code: WebixCallback): void;
  function remote(): void;
  function require(url: string): void;
  function send(url: string, values: any, method: string, target: string): void;
  function single(source: WebixCallback): WebixCallback;
  function template(template: string): WebixCallback;
  function toArray(array: any[]): any[];
  function toFunctor(name: string): WebixCallback;
  function toNode(id: string): HTMLElement;
  function type(config: any): void;
  function ui(config: any, parent?: any, replacement?: any): webix.ui.baseview;
  function uid(): string;
  function unblockEvent(): void;
  function wrap(target: WebixCallback, source: WebixCallback): WebixCallback;
  var codebase: string;
  var name: string;
  var version: string;
  var clipbuffer: webix.clipbuffer;
  var color: webix.color;
  var csv: webix.csv;
  var editors: webix.editors;
  var env: webix.env;
  var history: webix.history;
  var html: webix.html;
  var i18n: webix.i18n;
  var locale: webix.locale;
  var markup: webix.markup;
  var promise: webix.promise;
  var rules: webix.rules;
  var storage: webix.storage;

  interface ActiveContent {}
  var ActiveContent: ActiveContent;

  interface AtomDataLoader {
    load(url: string, type?: string, callback?: WebixCallback): PromisedData;
    parse(data: any, type: string): void;
  }
  var AtomDataLoader: AtomDataLoader;

  interface AtomRender {
    render(id: string, data: any, type: string): void;
    sync(source: any, filter: WebixCallback, silent: boolean): void;
  }
  var AtomRender: AtomRender;

  interface AutoTooltip {}
  var AutoTooltip: AutoTooltip;

  interface BaseBind {
    bind(target: any, rule?: WebixCallback, format?: string): void;
    unbind(): void;
  }
  var BaseBind: BaseBind;

  interface BindSource {
    addBind(source: any, rule: string, format: string): void;
    getBindData(key: string, update: boolean): void;
    removeBind(source: any): void;
    saveBatch(func: WebixCallback): void;
    setBindData(data: any, key: string): void;
  }
  var BindSource: BindSource;

  interface Canvas {
    clearCanvas(): void;
    getCanvas(context: string): any;
    hideCanvas(): void;
    renderText(
      x: number,
      y: number,
      text: string,
      css: string,
      w: number,
    ): void;
    renderTextAt(
      valign: string,
      align: string,
      x: number,
      y: number,
      t: string,
      c: string,
      w: number,
    ): void;
    showCanvas(): void;
    toggleCanvas(): void;
  }
  var Canvas: Canvas;

  interface CollectionBind {
    getCursor(): number;
    refreshCursor(): void;
    setCursor(cursor: string): void;
  }
  var CollectionBind: CollectionBind;

  interface ContextHelper {
    attachTo(view: any): void;
    getContext(): any;
  }
  var ContextHelper: ContextHelper;

  interface CopyPaste {}
  var CopyPaste: CopyPaste;

  interface CustomScroll {
    enable(html_node: HTMLElement | webix.ui.baseview): void;
    init(): void;
    scrollStep: number;
  }
  var CustomScroll: CustomScroll;

  interface DataCollection {
    add(obj: any, index?: number): string;
    addBind(source: any, rule: string, format: string): void;
    attachEvent(type: string, functor: WebixCallback, id?: string): string;
    bind(target: any, rule?: WebixCallback, format?: string): void;
    blockEvent(): void;
    callEvent(name: string, params: any[]): boolean;
    clearAll(): void;
    clearValidation(): void;
    count(): number;
    define(property: string, value: any): void;
    destructor(): void;
    detachEvent(id: string): void;
    exists(id: string): boolean;
    filter(
      text: string | WebixTemplate | WebixCallback,
      value: string,
      preserve: boolean,
    ): void;
    getBindData(key: string, update: boolean): void;
    getCursor(): number;
    getFirstId(): string;
    getIdByIndex(index: number): string;
    getIndexById(id: string): number;
    getItem(id: string): any;
    getLastId(): string;
    getNextId(id: string, step: number): string;
    getPrevId(id: string, step: number): string;
    hasEvent(name: string): boolean;
    isVisible(): boolean;
    load(url: string, type?: string, callback?: WebixCallback): PromisedData;
    loadNext(
      count: number,
      start: number,
      callback: WebixCallback,
      url: string,
      now: boolean,
    ): void;
    mapEvent(map: any): void;
    parse(data: any, type: string): void;
    refresh(id?: string): void;
    refreshCursor(): void;
    remove(id: string): void;
    removeBind(source: any): void;
    saveBatch(func: WebixCallback): void;
    serialize(): any;
    setBindData(data: any, key: string): void;
    setCursor(cursor: string): void;
    sort(by: string, dir?: string, as?: string): void;
    sync(source: any, filter: WebixCallback, silent: boolean): void;
    unbind(): void;
    unblockEvent(): void;
    updateItem(id: string, data: any): void;
    validate(id?: string): boolean;
    config: { [key: string]: any };
    name: string;
  }
  interface DataCollectionFactory {
    new (): DataCollection;
  }
  var DataCollection: DataCollectionFactory;

  interface DataDriver {
    csv: any;
    html: any;
    htmltable: any;
    jsarray: any;
    json: any;
    xml: any;
  }
  var DataDriver: DataDriver;

  interface DataLoader {
    add(obj: any, index?: number): string;
    clearAll(): void;
    count(): number;
    exists(id: string): boolean;
    filter(
      text: string | WebixTemplate | WebixCallback,
      value: string,
      preserve: boolean,
    ): void;
    getFirstId(): string;
    getIdByIndex(index: number): string;
    getIndexById(id: string): number;
    getItem(id: string): any;
    getLastId(): string;
    getNextId(id: string, step: number): string;
    getPrevId(id: string, step: number): string;
    load(url: string, type?: string, callback?: WebixCallback): PromisedData;
    loadNext(
      count: number,
      start: number,
      callback: WebixCallback,
      url: string,
      now: boolean,
    ): void;
    parse(data: any, type: string): void;
    refresh(id?: string): void;
    remove(id: string): void;
    serialize(): any;
    sort(by: string, dir?: string, as?: string): void;
    sync(source: any, filter: WebixCallback, silent: boolean): void;
    updateItem(id: string, data: any): void;
  }
  var DataLoader: DataLoader;

  interface DataMarks {
    addCss(id: string | number, css: string, silent?: boolean): void;
    clearCss(css: string, silent?: boolean): void;
    hasCss(id: string, css: string): boolean;
    removeCss(id: string | number, css: string, silent?: boolean): void;
  }
  var DataMarks: DataMarks;

  interface DataMove {
    copy(sid: string, tindex: number, tobj?: any, details?: any): void;
    move(sid: string, tindex: number, tobj?: any, details?: any): string;
    moveBottom(id: string): void;
    moveDown(id: string, step: number): void;
    moveTop(id: string): void;
    moveUp(id: string, step: number): void;
  }
  var DataMove: DataMove;

  interface DataProcessor {
    attachEvent(type: string, functor: WebixCallback, id?: string): string;
    attachProgress(
      start: WebixCallback,
      end: WebixCallback,
      error: WebixCallback,
    ): void;
    blockEvent(): void;
    callEvent(name: string, params: any[]): boolean;
    clearValidation(): void;
    define(property: string, value: any): void;
    detachEvent(id: string): void;
    escape(value: string): string;
    getItemState(itemId: string): any;
    getState(): string | boolean;
    hasEvent(name: string): boolean;
    ignore(code: WebixCallback, master: any): void;
    mapEvent(map: any): void;
    off(): void;
    on(): void;
    processResult(data: any): void;
    reset(): void;
    save(id: string, operation: string): void;
    send(): void;
    setItemState(itemId: string, state: boolean): void;
    unblockEvent(): void;
    validate(): boolean;
    config: { [key: string]: any };
    name: string;
  }
  var DataProcessor: DataProcessor;

  interface DataRecord {
    attachEvent(type: string, functor: WebixCallback, id?: string): string;
    bind(target: any, rule?: WebixCallback, format?: string): void;
    blockEvent(): void;
    callEvent(name: string, params: any[]): boolean;
    define(property: string, value: any): void;
    detachEvent(id: string): void;
    getValues(): any;
    hasEvent(name: string): boolean;
    isVisible(): boolean;
    load(url: string, type?: string, callback?: WebixCallback): PromisedData;
    mapEvent(map: any): void;
    parse(data: any, type: string): void;
    refresh(id?: string): void;
    setValues(values: any, update?: boolean): void;
    unbind(): void;
    unblockEvent(): void;
    config: { [key: string]: any };
    name: string;
  }
  var DataRecord: DataRecord;

  interface DataState {
    getState(): any;
    setState(state: any): void;
  }
  var DataState: DataState;

  interface DataStore {
    add(obj: any, index?: number): string;
    addMark(id: string, name: string, css?: boolean, value?: any): any;
    attachEvent(type: string, functor: WebixCallback, id?: string): string;
    blockEvent(): void;
    callEvent(name: string, params: any[]): boolean;
    changeId(old: string, newid: string): void;
    clearAll(): void;
    clearMark(name: string): void;
    count(): number;
    destructor(): void;
    detachEvent(id: string): void;
    each(method: WebixCallback, master?: any, all?: boolean): void;
    exists(id: string): boolean;
    filter(
      text: string | WebixTemplate | WebixCallback,
      value: string,
      preserve: boolean,
    ): void;
    getFirstId(): string;
    getIdByIndex(index: number): string;
    getIndexById(id: string): number;
    getIndexRange(from: string, to: string): any[];
    getItem(id: string): any;
    getLastId(): string;
    getMark(id: string, mark_name: string): any;
    getNextId(id: string, step: number): string;
    getPrevId(id: string, step: number): string;
    getRange(from: string, to: string): any[];
    hasEvent(name: string): boolean;
    id(item: any): string;
    importData(source: webix.ui.baseview): void;
    mapEvent(map: any): void;
    move(sid: string, tindex: number, tobj?: any, details?: any): string;
    provideApi(target: any, eventable: boolean): void;
    refresh(id?: string): void;
    remove(id: string): void;
    removeMark(id: string, name: string, css: boolean): void;
    scheme(config: any): void;
    serialize(): any;
    setDriver(type: string): void;
    silent(code: WebixCallback): void;
    sort(by: string, dir?: string, as?: string): void;
    sync(source: any, filter: WebixCallback, silent: boolean): void;
    unblockEvent(): void;
    unsync(): void;
    updateItem(id: string, data: any): void;
    driver: any;
    name: string;
    order: any[];
    pull: any;
  }
  var DataStore: DataStore;

  interface DataValue {
    attachEvent(type: string, functor: WebixCallback, id?: string): string;
    bind(target: any, rule?: WebixCallback, format?: string): void;
    blockEvent(): void;
    callEvent(name: string, params: any[]): boolean;
    detachEvent(id: string): void;
    getValue(): string;
    hasEvent(name: string): boolean;
    isVisible(): boolean;
    mapEvent(map: any): void;
    refresh(): void;
    setValue(value: string): void;
    unbind(): void;
    unblockEvent(): void;
    name: string;
  }
  var DataValue: DataValue;

  interface Date {
    add(date: any, inc: number, mode: string): any;
    copy(date: any): any;
    datePart(date: any): any;
    dateToStr(format: string, utc: boolean): WebixCallback;
    dayStart(date: any): any;
    equal(datea: any, dateb: any): boolean;
    getISOWeek(date: any): number;
    getUTCISOWeek(data: any): number;
    isHoliday(date: any): boolean;
    monthStart(date: any): any;
    strToDate(format: string, utc: boolean): WebixCallback;
    timePart(date: any): number;
    toFixed(num: number): number;
    weekStart(date: any): any;
    yearStart(date: any): any;
    startOnMonday: boolean;
  }
  var Date: Date;

  interface Destruction {
    destructor(): void;
  }
  var Destruction: Destruction;

  interface DragControl {
    addDrag(node: string | HTMLElement, ctrl: any): void;
    addDrop(node: string | HTMLElement, ctrl: any, master_mode: boolean): void;
    createDrag(event: Event): void;
    destroyDrag(): void;
    getContext(): any;
    getMaster(target: any): any;
    getNode(): HTMLElement;
    sendSignal(signal: string): void;
    $drag(s: any, e: Event): HTMLElement;
    $dragIn(s: any, t: any, e: Event): void;
    $dragOut(s: any, t: any, n: any, e: Event): void;
    $dragPos: WebixCallback;
    $drop(s: any, t: any, d: any, e: Event): void;
    left: number;
    top: number;
  }
  var DragControl: DragControl;

  interface DragItem {
    $drag(source: HTMLElement, ev: Event): string;
    $dragHTML: WebixCallback;
    $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
    $dragMark(context: any, ev: Event): boolean;
    $dragOut(
      source: HTMLElement,
      old_target: HTMLElement,
      new_target: HTMLElement,
      ev: Event,
    ): void;
    $drop(source: HTMLElement, target: HTMLElement, ev: any): void;
    $dropAllow: WebixCallback;
  }
  var DragItem: DragItem;

  interface DragOrder {
    $drag(source: HTMLElement, ev: Event): string;
    $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
    $dragPos: WebixCallback;
    $drop(source: HTMLElement, target: HTMLElement, ev: any): void;
  }
  var DragOrder: DragOrder;

  interface EditAbility {
    edit(id: any): void;
    editCancel(): void;
    editNext(): boolean;
    editStop(): void;
    focusEditor(): void;
    getEditState(): any;
    getEditor(id?: string): any;
    getEditorValue(): string;
    validateEditor(id?: string): boolean;
  }
  var EditAbility: EditAbility;

  interface EventSystem {
    attachEvent(type: string, functor: WebixCallback, id?: string): string;
    blockEvent(): void;
    callEvent(name: string, params: any[]): boolean;
    detachEvent(id: string): void;
    hasEvent(name: string): boolean;
    mapEvent(map: any): void;
    unblockEvent(): void;
  }
  var EventSystem: EventSystem;

  interface Group {
    group(config: any, mode: boolean): void;
    ungroup(mode: boolean): void;
  }
  var Group: Group;

  interface GroupMethods {
    any(property: string, data: any): void;
    count(property: string, data: any): void;
    max(property: string, data: any): void;
    min(property: string, data: any): void;
    string(property: string, data: any): void;
    sum(property: string, data: any): void;
  }
  var GroupMethods: GroupMethods;

  interface GroupStore {
    group(stats: any): void;
    ungroup(): void;
  }
  var GroupStore: GroupStore;

  interface HtmlMap {
    addPoly(id: string, points: any[]): void;
    addRect(id: string, points: any[], userdata?: string): void;
    addSector(
      id: string,
      aplha0: number,
      aplha1: number,
      x: number,
      y: number,
      R: number,
      ky: number,
    ): void;
    render(html: HTMLElement): void;
  }
  var HtmlMap: HtmlMap;

  interface IdSpace {
    innerId(id: string): string;
    ui(view: any): webix.ui.baseview;
    $$: any;
  }
  var IdSpace: IdSpace;

  interface KeysNavigation {
    moveSelection(direction: string): void;
  }
  var KeysNavigation: KeysNavigation;

  interface MapCollection {}
  var MapCollection: MapCollection;

  interface Modality {}
  var Modality: Modality;

  interface MouseEvents {
    on_click: WebixCallback;
    on_context: { [key: string]: any };
    on_dblclick: WebixCallback;
    on_mouse_move: WebixCallback;
  }
  var MouseEvents: MouseEvents;

  interface Movable {}
  var Movable: Movable;

  interface NavigationButtons {}
  var NavigationButtons: NavigationButtons;

  interface Number {
    format(value: number, config: any): string;
    numToStr(config: any): WebixCallback;
  }
  var Number: Number;

  interface OverlayBox {
    hideOverlay(): void;
    showOverlay(): void;
  }
  var OverlayBox: OverlayBox;

  interface PagingAbility {
    getPage(): number;
    getPager(): any;
    setPage(page: number): void;
  }
  var PagingAbility: PagingAbility;

  interface PowerArray {
    each(functor: WebixCallback, master: any): void;
    filter(functor: WebixCallback, master: any): any[];
    find(data: any): number;
    insertAt(data: any, pos: number): void;
    map(functor: WebixCallback, master: any): any[];
    remove(value: any): void;
    removeAt(pos: number, len: number): void;
  }
  var PowerArray: PowerArray;

  interface ProgressBar {
    hideProgress(): void;
    showProgress(config?: any): void;
  }
  var ProgressBar: ProgressBar;

  interface RecordBind {}
  var RecordBind: RecordBind;

  interface RenderStack {
    customize(obj: any): void;
    getItemNode(id: string): void;
    locate(e: Event): string;
    render(id: string, data: any, type: string): void;
    showItem(id: string): void;
    type: { [key: string]: any };
    types: { [key: string]: any };
  }
  var RenderStack: RenderStack;

  interface Scrollable {
    getScrollState(): any;
    scrollTo(x: number, y: number): void;
  }
  var Scrollable: Scrollable;

  interface SelectionModel {
    getSelectedId(as_array: boolean): string | any[];
    getSelectedItem(as_array?: boolean): any;
    isSelected(id: string): boolean;
    select(id: string | any[], preserve: boolean): void;
    selectAll(from?: string, to?: string): void;
    unselect(id?: string): void;
    unselectAll(): void;
  }
  var SelectionModel: SelectionModel;

  interface Settings {
    define(property: string, value: any): void;
    config: { [key: string]: any };
    name: string;
  }
  var Settings: Settings;

  interface SingleRender {
    customize(obj: any): void;
    render(id: string, data: any, type: string): void;
    sync(source: any, filter: WebixCallback, silent: boolean): void;
    type: { [key: string]: any };
  }
  var SingleRender: SingleRender;

  interface TablePaste {}
  var TablePaste: TablePaste;

  interface Touch {
    disable(): void;
    enable(): void;
    limit(mode: boolean): void;
    scrollTo(node: HTMLElement, x: number, y: number, speed: string): void;
    config: any;
  }
  var Touch: Touch;

  interface TreeAPI {
    close(id: string): void;
    closeAll(): void;
    getOpenItems(): any[];
    getState(): any;
    isBranchOpen(id: string): boolean;
    open(id: string): void;
    openAll(): void;
    setState(state: any): void;
  }
  var TreeAPI: TreeAPI;

  interface TreeClick {
    webix_tree_checkbox(obj: any, common: { [key: string]: any }): string;
    webix_tree_close(obj: any, common: { [key: string]: any }): string;
    webix_tree_open(obj: any, common: { [key: string]: any }): string;
  }
  var TreeClick: TreeClick;

  interface TreeCollection {
    add(obj: any, index?: number, parentId?: string): string;
    addBind(source: any, rule: string, format: string): void;
    attachEvent(type: string, functor: WebixCallback, id?: string): string;
    bind(target: any, rule?: WebixCallback, format?: string): void;
    blockEvent(): void;
    callEvent(name: string, params: any[]): boolean;
    clearAll(): void;
    clearValidation(): void;
    count(): number;
    define(property: string, value: any): void;
    destructor(): void;
    detachEvent(id: string): void;
    exists(id: string): boolean;
    filter(
      text: string | WebixTemplate | WebixCallback,
      value: string,
      preserve: boolean,
    ): void;
    getBindData(key: string, update: boolean): void;
    getBranchIndex(id: string, parent?: string): number;
    getCursor(): number;
    getFirstChildId(id: string): string;
    getFirstId(): string;
    getIdByIndex(index: number): string;
    getIndexById(id: string): number;
    getItem(id: string): any;
    getLastId(): string;
    getNextId(id: string, step: number): string;
    getNextSiblingId(id: any): string;
    getParentId(id: string): string;
    getPrevId(id: string, step: number): string;
    getPrevSiblingId(id: any): string;
    hasEvent(name: string): boolean;
    isBranch(id: string): boolean;
    isVisible(): boolean;
    load(url: string, type?: string, callback?: WebixCallback): PromisedData;
    loadBranch(id: string, callback: WebixCallback, url: string): void;
    loadNext(
      count: number,
      start: number,
      callback: WebixCallback,
      url: string,
      now: boolean,
    ): void;
    mapEvent(map: any): void;
    parse(data: any, type: string): void;
    refresh(id?: string): void;
    refreshCursor(): void;
    remove(id: string): void;
    removeBind(source: any): void;
    saveBatch(func: WebixCallback): void;
    serialize(): any;
    setBindData(data: any, key: string): void;
    setCursor(cursor: string): void;
    sort(by: string, dir?: string, as?: string): void;
    sync(source: any, filter: WebixCallback, silent: boolean): void;
    unbind(): void;
    unblockEvent(): void;
    updateItem(id: string, data: any): void;
    validate(id?: string): boolean;
    config: { [key: string]: any };
    name: string;
  }
  var TreeCollection: TreeCollection;

  interface TreeDataLoader {
    loadBranch(id: string, callback: WebixCallback, url: string): void;
  }
  var TreeDataLoader: TreeDataLoader;

  interface TreeDataMove {
    copy(
      sid: string,
      tindex: number,
      tobj?: webix.ui.baseview,
      details?: any,
    ): string;
    move(
      sid: string,
      tindex: number,
      tobj?: webix.ui.baseview,
      details?: any,
    ): string;
    $dropAllow: WebixCallback;
  }
  var TreeDataMove: TreeDataMove;

  interface TreeRenderStack {
    getItemNode(id: string): void;
    getItemNode(id: string): HTMLElement;
  }
  var TreeRenderStack: TreeRenderStack;

  interface TreeStateCheckbox {
    checkAll(id?: string): void;
    checkItem(id: string): void;
    getChecked(): any[];
    isChecked(id: string): boolean;
    uncheckAll(id?: string): void;
    uncheckItem(id: string): void;
  }
  var TreeStateCheckbox: TreeStateCheckbox;

  interface TreeStore {
    add(obj: any, index?: number, parentId?: string): string;
    changeId(old: string, newid: string): void;
    clearAll(): void;
    count(): number;
    each(code: WebixCallback, master: any, all: boolean, pid: string): void;
    eachChild(
      pid: string,
      code: WebixCallback,
      master?: any,
      all?: boolean,
    ): void;
    eachOpen(code: WebixCallback, master?: any, pid?: string): void;
    eachSubItem(pid: string, code: WebixCallback): void;
    getBranch(id: string): any[];
    getBranchIndex(id: string, parent?: string): number;
    getFirstChildId(id: string): string;
    getNextSiblingId(id: any): string;
    getParentId(id: string): string;
    getPrevSiblingId(id: any): string;
    getTopRange(): any[];
    isBranch(id: string): boolean;
    provideApi(target: any, eventable: boolean): void;
    remove(id: string): void;
    serialize(): any;
    name: string;
  }
  var TreeStore: TreeStore;

  interface TreeTableClick {}
  var TreeTableClick: TreeTableClick;

  interface TreeTablePaste {
    insert(data: any[]): void;
  }
  var TreeTablePaste: TreeTablePaste;

  interface TreeType {
    checkbox(obj: any, common: any): string;
    folder(obj: any, common: any): string;
    icon(obj: any, common: any): string;
    space(obj: any, common: any): string;
  }
  var TreeType: TreeType;

  interface UIExtension {}
  var UIExtension: UIExtension;

  interface UIManager {
    addHotKey(key: string, handler: WebixCallback, obj?: any): void;
    canFocus(id: string): boolean;
    destructor(): void;
    getFocus(): webix.ui.baseview;
    getNext(view: any): any;
    getPrev(view: any): any;
    getState(id: string, childs: boolean): any;
    getTop(id: string): any;
    hasFocus(id: string): boolean;
    removeHotKey(key: string, handler?: WebixCallback, obj?: any): void;
    setFocus(id: string): void;
    setState(state: any): void;
  }
  var UIManager: UIManager;

  interface UploadDriver {
    flash: any;
    html5: any;
  }
  var UploadDriver: UploadDriver;

  interface ValidateCollection {
    clearValidation(): void;
    validate(id?: string): boolean;
  }
  var ValidateCollection: ValidateCollection;

  interface ValidateData {
    clearValidation(): void;
    validate(): boolean;
  }
  var ValidateData: ValidateData;

  interface ValueBind {}
  var ValueBind: ValueBind;

  interface Values {
    clear(): void;
    focus(item: string): void;
    getCleanValues(): any;
    getDirtyValues(): any;
    getValues(details?: any): { [key: string]: any };
    isDirty(): boolean;
    setDirty(mark?: boolean): void;
    setValues(values: any, update?: boolean): void;
  }
  var Values: Values;

  interface VirtualRenderStack {
    getItemNode(id: string): void;
    render(id: string, data: any, type: string): void;
    showItem(id: string): void;
  }
  var VirtualRenderStack: VirtualRenderStack;

  module ui {
    function delay(config: any): void;
    function fullScreen(): void;
    function hasMethod(name: string, method_name: string): boolean;
    function resize(): void;
    function zIndex(): number;
    var scrollSize: number;
    var zIndexBase: number;

    interface baselayoutConfig {
      animate?: any;
      borderless?: boolean;
      cols?: any[];
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: any;
      responsive?: string;
      rows?: any[];
      visibleBatch?: string;
      width?: number;
    }
    interface baselayout extends webix.ui.baseview {
      addView(view: any, index?: number): webix.ui.baseview;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: any): number;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      reconstruct(): void;
      removeView(id: string): void;
      resize(): void;
      resizeChildren(): void;
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: baselayoutConfig;
      name: string;
    }
    interface baseviewConfig {
      animate?: any;
      borderless?: boolean;
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      width?: number;
    }
    interface baseview {
      adjust(): void;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      define(property: string, value: any): void;
      destructor(): void;
      disable(): void;
      enable(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      $getSize(): any[];
      $height: number;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: baseviewConfig;
      name: string;
    }
    interface protoConfig {
      animate?: any;
      borderless?: boolean;
      click?: string | WebixCallback;
      container?: HTMLElement;
      css?: string;
      data?: string | any[];
      dataFeed?: string | WebixCallback;
      datathrottle?: number;
      datatype?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: any;
      pager?: any;
      ready?: WebixCallback;
      removeMissed?: boolean;
      rules?: any;
      save?: string;
      scheme?: any;
      template?: string | WebixCallback;
      tooltip?: any;
      type?: any;
      url?: string;
      width?: number;
    }
    interface proto extends webix.ui.baseview {
      add(obj: any, index?: number): string;
      addCss(id: string | number, css: string, silent?: boolean): void;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      count(): number;
      customize(obj: any): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      exists(id: string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value: string,
        preserve: boolean,
      ): void;
      getChildViews(): any[];
      getFirstId(): string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number): string;
      getIndexById(id: string): number;
      getItem(id: string): any;
      getItemNode(id: string): void;
      getLastId(): string;
      getNextId(id: string, step: number): string;
      getNode(): any;
      getPage(): number;
      getPager(): any;
      getParentView(): any;
      getPrevId(id: string, step: number): string;
      getTopParentView(): webix.ui.baseview;
      hasCss(id: string, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(url: string, type?: string, callback?: WebixCallback): PromisedData;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
      ): void;
      locate(e: Event): string;
      mapEvent(map: any): void;
      parse(data: any, type: string): void;
      refresh(id?: string): void;
      remove(id: string): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      serialize(): any;
      setPage(page: number): void;
      show(force?: boolean, animation?: boolean): void;
      showItem(id: string): void;
      sort(by: string, dir?: string, as?: string): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      updateItem(id: string, data: any): void;
      validate(id?: string): boolean;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: protoConfig;
      name: string;
      type: { [key: string]: any };
      types: { [key: string]: any };
    }
    interface resizeareaConfig {
      border?: boolean;
      container?: string | HTMLElement;
      cursor?: string;
      dir?: string;
      eventPos?: number;
      height?: number;
      id?: string;
      on?: any;
      start?: number;
      width?: number;
    }
    interface resizearea {
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      detachEvent(id: string): void;
      hasEvent(name: string): boolean;
      mapEvent(map: any): void;
      unblockEvent(): void;
      config: resizeareaConfig;
      name: string;
    }
    interface viewConfig {
      animate?: any;
      borderless?: boolean;
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      width?: number;
    }
    interface view extends webix.ui.baseview {
      adjust(): void;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      define(property: string, value: any): void;
      destructor(): void;
      disable(): void;
      enable(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: viewConfig;
      name: string;
    }
    interface vscrollConfig {
      container?: HTMLElement;
      id?: string;
      on?: any;
      scroll?: string;
      scrollHeight?: number;
      scrollPos?: number;
      scrollSize?: number;
      scrollStep?: number;
      scrollVisible?: boolean;
      scrollWidth?: number;
      zoom?: number;
    }
    interface vscroll extends webix.ui.baseview {
      activeArea(node: HTMLElement): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      detachEvent(id: string): void;
      getScroll(): number;
      getSize(): number;
      hasEvent(name: string): boolean;
      mapEvent(map: any): void;
      scrollTo(pos: number): void;
      sizeTo(size: number): void;
      unblockEvent(): void;
      config: vscrollConfig;
      name: string;
    }
    interface accordionConfig {
      animate?: any;
      borderless?: boolean;
      collapsed?: boolean;
      cols?: any[];
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      isolate?: boolean;
      margin?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      multi?: boolean | string;
      on?: any;
      padding?: number;
      paddingX?: number;
      paddingY?: number;
      panelClass?: string;
      responsive?: string;
      rows?: any[];
      type?: string;
      visibleBatch?: string;
      width?: number;
    }
    interface accordion extends webix.ui.baseview {
      addView(view: any, index?: number): webix.ui.baseview;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: any): number;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      reconstruct(): void;
      removeView(id: string): void;
      resize(): void;
      resizeChildren(): void;
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: accordionConfig;
      name: string;
    }
    interface accordionitemConfig {
      animate?: any;
      body?: string | webix.ui.baseview;
      borderless?: boolean;
      collapsed?: boolean;
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      header?: boolean | string | WebixCallback;
      headerAlt?: string | WebixCallback;
      headerAltHeight?: number;
      headerHeight?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      on?: any;
      onClick?: { [key: string]: any };
      onContext?: { [key: string]: any };
      onDblClick?: WebixCallback;
      onMouseMove?: WebixCallback;
      width?: number;
    }
    interface accordionitem extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      collapse(): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      expand(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: accordionitemConfig;
      name: string;
      on_click: WebixCallback;
      on_context: { [key: string]: any };
      on_dblclick: WebixCallback;
      on_mouse_move: WebixCallback;
    }
    interface barcodeConfig {
      animate?: any;
      borderless?: boolean;
      color?: string;
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      paddingX?: number;
      paddingY?: number;
      textHeight?: number;
      type?: any;
      value?: string;
      width?: number;
    }
    interface barcode extends webix.ui.baseview {
      adjust(): void;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      define(property: string, value: any): void;
      destructor(): void;
      disable(): void;
      enable(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      render(): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: barcodeConfig;
      name: string;
      types: any[];
    }
    interface buttonConfig {
      align?: string;
      animate?: any;
      borderless?: boolean;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string;
      inputHeight?: number;
      inputWidth?: number;
      label?: string;
      labelPosition?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: any;
      placeholder?: string;
      popup?: any;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      tooltip?: string;
      type?: string;
      value?: string;
      width?: number;
    }
    interface button extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: buttonConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface calendarConfig {
      animate?: any;
      blockDates?: WebixCallback;
      borderless?: boolean;
      calendarHeader?: string;
      calendarTime?: string;
      calendarWeekHeader?: string;
      cellHeight?: number;
      container?: HTMLElement;
      css?: string;
      date?: any;
      dayTemplate?: WebixCallback;
      disabled?: boolean;
      events?: WebixCallback;
      gravity?: number;
      headerHeight?: number;
      height?: number;
      hidden?: boolean;
      icons?: any;
      id?: string;
      maxDate?: Date | string;
      maxHeight?: number;
      maxWidth?: number;
      minDate?: Date | string;
      minHeight?: number;
      minWidth?: number;
      minuteStep?: number;
      monthSelect?: boolean;
      mouseEventDelay?: number;
      navigation?: boolean;
      on?: any;
      onClick?: { [key: string]: any };
      onContext?: { [key: string]: any };
      onDblClick?: WebixCallback;
      onMouseMove?: WebixCallback;
      select?: boolean;
      skipEmptyWeeks?: boolean;
      timepicker?: boolean;
      timepickerHeight?: number;
      type?: string;
      weekHeader?: boolean;
      weekNumber?: boolean;
      width?: number;
    }
    interface calendar extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getSelectedDate(): any;
      getTopParentView(): webix.ui.baseview;
      getValue(): any;
      getVisibleDate(): any;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      locate(e: Event): string;
      mapEvent(map: any): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      selectDate(date: any): void;
      setValue(date: any): void;
      show(force?: boolean, animation?: boolean): void;
      showCalendar(date: any): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: calendarConfig;
      name: string;
      on_click: WebixCallback;
      on_context: { [key: string]: any };
      on_dblclick: WebixCallback;
      on_mouse_move: WebixCallback;
    }
    interface carouselConfig {
      animate?: any;
      borderless?: boolean;
      cols?: any[];
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      navigation?: any;
      on?: any;
      rows?: any[];
      scrollSpeed?: string;
      type?: string;
      width?: number;
    }
    interface carousel extends webix.ui.baseview {
      adjust(): void;
      adjustScroll(matrix: any): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getActiveId(): string;
      getActiveIndex(): number;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getLayout(): any;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      setActive(id: string): void;
      setActiveIndex(index: number): void;
      show(force?: boolean, animation?: boolean): void;
      showNext(): void;
      showPrev(): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: carouselConfig;
      name: string;
    }
    interface chartConfig {
      alpha?: number;
      animate?: any;
      barWidth?: number;
      border?: boolean;
      borderColor?: string;
      borderless?: boolean;
      cant?: number;
      color?: string | WebixCallback;
      container?: HTMLElement;
      css?: string;
      data?: string | any[];
      dataFeed?: string | WebixCallback;
      datathrottle?: number;
      datatype?: string;
      disableLines?: boolean;
      disabled?: boolean;
      eventRadius?: number;
      fill?: string;
      fixOverflow?: boolean;
      gradient?: boolean | string | WebixCallback;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      item?: any;
      label?: string | WebixCallback;
      labelOffset?: number;
      legend?: any;
      line?: any;
      lineColor?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      offset?: boolean;
      on?: any;
      onClick?: { [key: string]: any };
      onContext?: { [key: string]: any };
      onDblClick?: WebixCallback;
      onMouseMove?: WebixCallback;
      origin?: number;
      padding?: any;
      pieHeight?: number;
      pieInnerText?: string | WebixCallback;
      preset?: string;
      radius?: number;
      ready?: WebixCallback;
      removeMissed?: boolean;
      save?: string;
      scale?: string;
      scheme?: any;
      series?: any[];
      shadow?: boolean;
      tooltip?: any;
      type?: string;
      url?: string;
      value?: string | WebixTemplate;
      width?: number;
      x?: number;
      xAxis?: any;
      xValue?: string;
      y?: number;
      yAxis?: any;
      yValue?: string;
    }
    interface chart extends webix.ui.baseview {
      add(obj: any, index?: number): string;
      addSeries(obj: any): void;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(): void;
      clearCanvas(): void;
      count(): number;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      exists(id: string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value: string,
        preserve: boolean,
      ): void;
      getChildViews(): any[];
      getFirstId(): string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number): string;
      getIndexById(id: string): number;
      getItem(id: string): any;
      getLastId(): string;
      getNextId(id: string, step: number): string;
      getNode(): any;
      getParentView(): any;
      getPrevId(id: string, step: number): string;
      getTopParentView(): webix.ui.baseview;
      group(config: any, mode: boolean): void;
      hasEvent(name: string): boolean;
      hide(): void;
      hideSeries(series: string): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(url: string, type?: string, callback?: WebixCallback): PromisedData;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
      ): void;
      locate(e: Event): string;
      mapEvent(map: any): void;
      parse(data: any, type: string): void;
      refresh(id?: string): void;
      remove(id: string): void;
      removeAllSeries(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      serialize(): any;
      show(force?: boolean, animation?: boolean): void;
      showSeries(series: string): void;
      sort(by: string, dir?: string, as?: string): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      ungroup(mode: boolean): void;
      updateItem(id: string, data: any): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      colormap: { [key: string]: any };
      config: chartConfig;
      name: string;
      on_click: WebixCallback;
      on_context: { [key: string]: any };
      on_dblclick: WebixCallback;
      on_mouse_move: WebixCallback;
      presets: { [key: string]: any };
    }
    interface checkboxConfig {
      align?: string;
      animate?: any;
      attributes?: { [key: string]: any };
      borderless?: boolean;
      bottomLabel?: any;
      bottomPadding?: any;
      checkValue?: string;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      customCheckbox?: boolean;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string;
      inputHeight?: number;
      inputPadding?: number;
      inputWidth?: number;
      invalidMessage?: any;
      label?: string;
      labelPosition?: string;
      labelWidth?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: any;
      placeholder?: string;
      popup?: any;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?: string | webix.ui.baseview;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      tooltip?: string;
      type?: string;
      uncheckValue?: string;
      validate?: boolean;
      validateEvent?: string;
      value?: string;
      width?: number;
    }
    interface checkbox extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      toggle(): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(obj: any, html: string, id: string): string;
      $renderLabel(config: any, id: string): string;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: checkboxConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface colorboardConfig {
      animate?: any;
      borderless?: boolean;
      cols?: number;
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      maxHeight?: number;
      maxLightness?: number;
      maxWidth?: number;
      minHeight?: number;
      minLightness?: number;
      minWidth?: number;
      on?: any;
      palette?: any[];
      rows?: number;
      template?: WebixCallback;
      value?: string;
      width?: number;
    }
    interface colorboard extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: string): string;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: colorboardConfig;
      name: string;
    }
    interface colorpickerConfig {
      align?: string;
      animate?: any;
      attributes?: { [key: string]: any };
      borderless?: boolean;
      bottomLabel?: any;
      bottomPadding?: any;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      editable?: boolean;
      format?: string;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      icon?: string;
      icons?: boolean;
      id?: string;
      inputHeight?: number;
      inputPadding?: number;
      inputWidth?: number;
      invalidMessage?: any;
      label?: string;
      labelPosition?: string;
      labelWidth?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: any;
      placeholder?: string;
      popup?: any;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      stringResult?: boolean;
      suggest?: string | webix.ui.baseview;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      timeIcon?: string;
      timepicker?: boolean;
      tooltip?: string;
      type?: string;
      validate?: boolean;
      validateEvent?: string;
      value?: string;
      width?: number;
    }
    interface colorpicker extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getPopup(): webix.ui.baseview;
      getText(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(obj: any, html: string, id: string): string;
      $renderLabel(config: any, id: string): string;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: colorpickerConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface comboConfig {
      align?: string;
      animate?: any;
      attributes?: { [key: string]: any };
      borderless?: boolean;
      bottomLabel?: any;
      bottomPadding?: any;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      icon?: string;
      id?: string;
      inputHeight?: number;
      inputPadding?: number;
      inputWidth?: number;
      invalidMessage?: any;
      label?: string;
      labelPosition?: string;
      labelWidth?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: any;
      options?: any;
      placeholder?: string;
      popup?: any;
      popupWidth?: number;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?: string | webix.ui.baseview;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      text?: string;
      tooltip?: string;
      type?: string;
      validate?: boolean;
      validateEvent?: string;
      value?: string;
      width?: number;
    }
    interface combo extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getPopup(): webix.ui.baseview;
      getText(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(obj: any, html: string, id: string): string;
      $renderLabel(config: any, id: string): string;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: comboConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface contextConfig {
      animate?: any;
      autofit?: boolean;
      autofocus?: boolean;
      body?: string | webix.ui.baseview;
      borderless?: boolean;
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      head?: any;
      headHeight?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      left?: number;
      master?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      move?: boolean;
      on?: any;
      padding?: any;
      position?: string | WebixCallback;
      relative?: string;
      top?: number;
      width?: number;
      zIndex?: number;
    }
    interface context extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      attachTo(view: any): void;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      close(): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getBody(): any;
      getChildViews(): any[];
      getContext(): any;
      getFormView(): webix.ui.baseview;
      getHead(): any;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      resize(): void;
      resizeChildren(): void;
      setPosition(x: number, y: number): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: contextConfig;
      name: string;
    }
    interface contextmenuConfig {
      animate?: any;
      autofit?: boolean;
      autofocus?: boolean;
      autoheight?: boolean;
      autowidth?: boolean;
      body?: string | webix.ui.baseview;
      borderless?: boolean;
      click?: string | WebixCallback;
      clipboard?: boolean | string;
      container?: HTMLElement;
      css?: string;
      data?: string | any[];
      dataFeed?: string | WebixCallback;
      datathrottle?: number;
      datatype?: string;
      disabled?: boolean;
      drag?: boolean | string;
      dragscroll?: boolean | string;
      externalData?: WebixCallback;
      gravity?: number;
      head?: any;
      headHeight?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      layout?: string;
      left?: number;
      master?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      mouseEventDelay?: number;
      move?: boolean;
      multiselect?: any;
      navigation?: boolean;
      on?: any;
      onClick?: { [key: string]: any };
      onContext?: { [key: string]: any };
      onDblClick?: WebixCallback;
      onMouseMove?: WebixCallback;
      padding?: any;
      pager?: any;
      position?: string | WebixCallback;
      ready?: WebixCallback;
      relative?: string;
      removeMissed?: boolean;
      rules?: any;
      save?: string;
      scheme?: any;
      scroll?: boolean | string;
      scrollSpeed?: string;
      select?: boolean | string;
      subMenuPos?: string;
      submenu?: any;
      template?: string | WebixCallback;
      templateCopy?: WebixCallback;
      tooltip?: any;
      top?: number;
      type?: any;
      url?: string;
      width?: number;
      xCount?: number;
      yCount?: number;
      zIndex?: number;
    }
    interface contextmenu extends webix.ui.baseview {
      add(obj: any, index?: number): string;
      addCss(id: string | number, css: string, silent?: boolean): void;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      attachTo(view: any): void;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      close(): void;
      copy(sid: string, tindex: number, tobj?: any, details?: any): void;
      count(): number;
      customize(obj: any): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      disableItem(id: string): void;
      enable(): void;
      enableItem(id: string): void;
      exists(id: string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value: string,
        preserve: boolean,
      ): void;
      getBody(): any;
      getChildViews(): any[];
      getContext(): any;
      getFirstId(): string;
      getFormView(): webix.ui.baseview;
      getHead(): any;
      getIdByIndex(index: number): string;
      getIndexById(id: string): number;
      getItem(id: string): any;
      getItemNode(id: string): void;
      getLastId(): string;
      getMenu(id: string | number): any;
      getMenuItem(id: string): any;
      getNextId(id: string, step: number): string;
      getNode(): any;
      getPage(): number;
      getPager(): any;
      getParentView(): any;
      getPrevId(id: string, step: number): string;
      getScrollState(): any;
      getSelectedId(as_array: boolean): string | any[];
      getSelectedItem(as_array?: boolean): any;
      getSubMenu(id: string | number): any;
      getTopMenu(): any;
      getTopParentView(): webix.ui.baseview;
      getVisibleCount(): number;
      hasCss(id: string, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      hideItem(id: string): void;
      isEnabled(): boolean;
      isSelected(id: string): boolean;
      isVisible(): boolean;
      load(url: string, type?: string, callback?: WebixCallback): PromisedData;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
      ): void;
      locate(e: Event): string;
      mapEvent(map: any): void;
      move(sid: string, tindex: number, tobj?: any, details?: any): string;
      moveBottom(id: string): void;
      moveDown(id: string, step: number): void;
      moveSelection(direction: string): void;
      moveTop(id: string): void;
      moveUp(id: string, step: number): void;
      parse(data: any, type: string): void;
      refresh(id?: string): void;
      remove(id: string): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      resizeChildren(): void;
      scrollTo(x: number, y: number): void;
      select(id: string | any[], preserve: boolean): void;
      selectAll(from?: string, to?: string): void;
      serialize(): any;
      setPage(page: number): void;
      setPosition(x: number, y: number): void;
      show(force?: boolean, animation?: boolean): void;
      showItem(id: string): void;
      sort(by: string, dir?: string, as?: string): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      unselect(id?: string): void;
      unselectAll(): void;
      updateItem(id: string, data: any): void;
      validate(id?: string): boolean;
      $drag(source: HTMLElement, ev: Event): string;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: any, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event,
      ): void;
      $drop(source: HTMLElement, target: HTMLElement, ev: any): void;
      $dropAllow: WebixCallback;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: contextmenuConfig;
      name: string;
      on_click: WebixCallback;
      on_context: { [key: string]: any };
      on_dblclick: WebixCallback;
      on_mouse_move: WebixCallback;
      type: { [key: string]: any };
      types: { [key: string]: any };
    }
    interface counterConfig {
      align?: string;
      animate?: any;
      attributes?: { [key: string]: any };
      borderless?: boolean;
      bottomLabel?: any;
      bottomPadding?: any;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string;
      inputHeight?: number;
      inputPadding?: number;
      inputWidth?: number;
      invalidMessage?: any;
      label?: string;
      labelPosition?: string;
      labelWidth?: number;
      max?: number;
      maxHeight?: number;
      maxWidth?: number;
      min?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: any;
      placeholder?: string;
      popup?: any;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      step?: number;
      suggest?: string | webix.ui.baseview;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      tooltip?: string;
      type?: string;
      validate?: boolean;
      validateEvent?: string;
      value?: string;
      width?: number;
    }
    interface counter extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      getValue(): number;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      next(step?: number): void;
      prev(step?: number): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: number): void;
      shift(value?: number): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(obj: any, html: string, id: string): string;
      $renderLabel(config: any, id: string): string;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: counterConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface datasuggestConfig {
      animate?: any;
      autofit?: boolean;
      autofocus?: boolean;
      body?: string | webix.ui.baseview;
      borderless?: boolean;
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      filter?: WebixCallback;
      fitMaster?: boolean;
      gravity?: number;
      head?: any;
      headHeight?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      input?: any;
      keyPressTimeout?: number;
      left?: number;
      master?: webix.ui.baseview;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      move?: boolean;
      on?: any;
      padding?: any;
      position?: string | WebixCallback;
      relative?: string;
      template?: string | WebixTemplate;
      textValue?: string;
      top?: number;
      type?: string;
      width?: number;
      zIndex?: number;
    }
    interface datasuggest extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      close(): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getBody(): any;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getHead(): any;
      getItemText(id: string): string;
      getList(): webix.ui.baseview;
      getMasterValue(): any;
      getNode(): any;
      getParentView(): any;
      getSuggestion(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): string | number;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      linkInput(input: HTMLElement): void;
      mapEvent(map: any): void;
      resize(): void;
      resizeChildren(): void;
      setMasterValue(value: any): void;
      setPosition(x: number, y: number): void;
      setValue(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: datasuggestConfig;
      name: string;
    }
    interface datatableConfig {
      animate?: any;
      autoConfig?: boolean;
      autoheight?: boolean;
      autowidth?: boolean;
      blockselect?: boolean;
      borderless?: boolean;
      checkboxRefresh?: boolean;
      clipboard?: boolean | string;
      columnWidth?: number;
      columns?: any[];
      container?: HTMLElement;
      css?: string;
      data?: string | any[];
      dataFeed?: string | WebixCallback;
      datafetch?: number;
      datathrottle?: number;
      datatype?: string;
      delimiter?: any;
      disabled?: boolean;
      drag?: boolean | string;
      dragColumn?: boolean | string;
      dragscroll?: boolean | string;
      editMath?: boolean;
      editValue?: string;
      editable?: boolean;
      editaction?: string;
      externalData?: WebixCallback;
      filterMode?: any;
      fixedRowHeight?: boolean;
      footer?: boolean;
      form?: string;
      gravity?: number;
      header?: boolean;
      headerRowHeight?: number;
      headermenu?: any;
      height?: number;
      hidden?: boolean;
      hover?: string;
      id?: string;
      leftSplit?: number;
      liveValidation?: boolean;
      loadahead?: number;
      math?: boolean;
      maxHeight?: number;
      maxWidth?: number;
      minColumnHeight?: number;
      minColumnWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multiselect?: boolean;
      navigation?: boolean;
      on?: any;
      onClick?: { [key: string]: any };
      onContext?: { [key: string]: any };
      onDblClick?: WebixCallback;
      onMouseMove?: WebixCallback;
      pager?: any;
      prerender?: boolean;
      ready?: WebixCallback;
      removeMissed?: boolean;
      resizeColumn?: boolean;
      resizeRow?: boolean;
      rightSplit?: number;
      rowHeight?: number;
      rowLineHeight?: number;
      rules?: any;
      save?: string;
      scheme?: any;
      scroll?: boolean;
      scrollAlignY?: boolean;
      scrollX?: boolean;
      scrollY?: boolean;
      select?: boolean | string;
      spans?: any[];
      tooltip?: any;
      type?: any;
      url?: string;
      width?: number;
      yCount?: number;
    }
    interface datatable extends webix.ui.baseview {
      add(obj: any, index?: number): string;
      addCellCss(id: string, name: string, css: string): void;
      addCss(id: string | number, css: string, silent?: boolean): void;
      addRowCss(id: string, css: string): void;
      addSpan(
        id: any,
        column: string,
        width: number,
        height: number,
        value?: string,
        css?: string,
      ): void;
      adjust(): void;
      adjustColumn(id: string | number, header?: string): void;
      adjustRowHeight(columnId: string, silent: boolean): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(): void;
      clearCss(css: string, silent?: boolean): void;
      clearSelection(): void;
      clearValidation(): void;
      collectValues(id: string): any[];
      columnId(index: number): string;
      copy(sid: string, tindex: number, tobj?: any, details?: any): void;
      count(): number;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      eachColumn(handler: WebixCallback, all?: boolean): void;
      eachRow(handler: WebixCallback, all?: boolean): void;
      edit(id: any): void;
      editCancel(): void;
      editCell(
        row: string,
        col: string,
        preserve?: boolean,
        show?: boolean,
      ): void;
      editColumn(id: string): void;
      editNext(): boolean;
      editRow(id: string): void;
      editStop(): void;
      enable(): void;
      exists(id: string): boolean;
      exportToExcel(url?: string): void;
      exportToPDF(url?: string): void;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value: string,
        preserve: boolean,
      ): void;
      filterByAll(): void;
      find(criterion: WebixCallback, first?: boolean): any;
      focusEditor(): void;
      getChildViews(): any[];
      getColumnConfig(id: string): any;
      getColumnIndex(id: string): number;
      getEditState(): any;
      getEditor(row?: any, column?: string | number): any;
      getEditorValue(): string;
      getFilter(columnID: string): any;
      getFirstId(): string;
      getFormView(): webix.ui.baseview;
      getHeaderContent(id: string): { [key: string]: any };
      getHeaderNode(columnId: string, rowIndex?: number): HTMLElement;
      getIdByIndex(index: number): string;
      getIndexById(id: string): number;
      getItem(id: string): any;
      getItemNode(id: string): void;
      getLastId(): string;
      getNextId(id: string, step: number): string;
      getNode(): any;
      getPage(): number;
      getPager(): any;
      getParentView(): any;
      getPrevId(id: string, step: number): string;
      getScrollState(): any;
      getSelectedId(asArray?: boolean, asString?: boolean): any;
      getSelectedItem(mode?: boolean): void;
      getState(): any;
      getText(rowid: string, colid: string): string;
      getTopParentView(): webix.ui.baseview;
      getVisibleCount(): number;
      group(config: any, mode: boolean): void;
      hasCss(id: string, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      hideColumn(id: string): void;
      hideOverlay(): void;
      isColumnVisible(id: string): boolean;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(url: string, type?: string, callback?: WebixCallback): PromisedData;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
      ): void;
      locate(node: HTMLElement | Event): any;
      mapCells(
        startrow: number,
        startcol: string,
        numrows: number,
        numcols: number,
        callback: WebixCallback,
      ): void;
      mapEvent(map: any): void;
      mapSelection(callback: WebixCallback): void;
      markSorting(column_id: string, dir: string): void;
      move(sid: string, tindex: number, tobj?: any, details?: any): string;
      moveBottom(id: string): void;
      moveColumn(id: string, index: number): void;
      moveDown(id: string, step: number): void;
      moveSelection(direction: string): void;
      moveTop(id: string): void;
      moveUp(id: string, step: number): void;
      parse(data: any, type: string): void;
      refresh(id?: string): void;
      refreshColumns(config?: any[]): void;
      refreshFilter(id: string): void;
      refreshHeaderContent(): void;
      registerFilter(node: HTMLElement, config: any, obj: any): void;
      remove(id: string): void;
      removeCellCss(id: string, name: string, css_name: string): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      removeRowCss(id: string, css_name: string): void;
      removeSpan(id: string | number, column: string): void;
      render(id: string, data: any, operation: string): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      select(row_id: string, preserve: boolean): void;
      selectRange(row_id: any, end_row_id: any): void;
      serialize(): any;
      setColumnWidth(id: string, width: number): void;
      setPage(page: number): void;
      setRowHeight(id: string, height: number): void;
      setState(state: any): void;
      show(force?: boolean, animation?: boolean): void;
      showCell(row: string, column: string): void;
      showColumn(id: string): void;
      showColumnBatch(batch: string | number): void;
      showItem(id: string): void;
      showItemByIndex(index: number): void;
      showOverlay(message: string): void;
      sort(by: string, dir?: string, as?: string): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      ungroup(mode: boolean): void;
      unselect(row_id: string): void;
      updateItem(id: string, data: any): void;
      validate(id?: string): boolean;
      validateEditor(id?: string): boolean;
      $drag(source: HTMLElement, ev: Event): string;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: any, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event,
      ): void;
      $drop(source: HTMLElement, target: HTMLElement, ev: any): void;
      $dropAllow: WebixCallback;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: datatableConfig;
      headerContent: any;
      name: string;
      on_click: WebixCallback;
      on_context: { [key: string]: any };
      on_dblclick: WebixCallback;
      on_mouse_move: WebixCallback;
      waitData: PromisedData;
    }
    interface dataviewConfig {
      animate?: any;
      autoheight?: boolean;
      borderless?: boolean;
      click?: string | WebixCallback;
      container?: HTMLElement;
      css?: string;
      data?: string | any[];
      dataFeed?: string | WebixCallback;
      datafetch?: number;
      datathrottle?: number;
      datatype?: string;
      disabled?: boolean;
      drag?: boolean | string;
      dragscroll?: boolean | string;
      externalData?: WebixCallback;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      loadahead?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multiselect?: any;
      navigation?: boolean;
      on?: any;
      onClick?: { [key: string]: any };
      onContext?: { [key: string]: any };
      onDblClick?: WebixCallback;
      onMouseMove?: WebixCallback;
      pager?: any;
      ready?: WebixCallback;
      removeMissed?: boolean;
      rules?: any;
      save?: string;
      scheme?: any;
      scroll?: boolean | string;
      scrollSpeed?: string;
      select?: boolean | string;
      template?: string | WebixCallback;
      tooltip?: any;
      type?: any;
      url?: string;
      width?: number;
      xCount?: number;
      yCount?: number;
    }
    interface dataview extends webix.ui.baseview {
      add(obj: any, index?: number): string;
      addCss(id: string | number, css: string, silent?: boolean): void;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      copy(sid: string, tindex: number, tobj?: any, details?: any): void;
      count(): number;
      customize(obj: any): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      exists(id: string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value: string,
        preserve: boolean,
      ): void;
      getChildViews(): any[];
      getFirstId(): string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number): string;
      getIndexById(id: string): number;
      getItem(id: string): any;
      getItemNode(id: string): void;
      getLastId(): string;
      getNextId(id: string, step: number): string;
      getNode(): any;
      getPage(): number;
      getPager(): any;
      getParentView(): any;
      getPrevId(id: string, step: number): string;
      getScrollState(): any;
      getSelectedId(as_array: boolean): string | any[];
      getSelectedItem(as_array?: boolean): any;
      getTopParentView(): webix.ui.baseview;
      hasCss(id: string, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isSelected(id: string): boolean;
      isVisible(): boolean;
      load(url: string, type?: string, callback?: WebixCallback): PromisedData;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
      ): void;
      locate(e: Event): string;
      mapEvent(map: any): void;
      move(sid: string, tindex: number, tobj?: any, details?: any): string;
      moveBottom(id: string): void;
      moveDown(id: string, step: number): void;
      moveSelection(direction: string): void;
      moveTop(id: string): void;
      moveUp(id: string, step: number): void;
      parse(data: any, type: string): void;
      refresh(id?: string): void;
      remove(id: string): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      select(id: string | any[], preserve: boolean): void;
      selectAll(from?: string, to?: string): void;
      serialize(): any;
      setPage(page: number): void;
      show(force?: boolean, animation?: boolean): void;
      showItem(id: string): void;
      sort(by: string, dir?: string, as?: string): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      unselect(id?: string): void;
      unselectAll(): void;
      updateItem(id: string, data: any): void;
      validate(id?: string): boolean;
      $drag(source: HTMLElement, ev: Event): string;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: any, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event,
      ): void;
      $drop(source: HTMLElement, target: HTMLElement, ev: any): void;
      $dropAllow: WebixCallback;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: dataviewConfig;
      name: string;
      on_click: WebixCallback;
      on_context: { [key: string]: any };
      on_dblclick: WebixCallback;
      on_mouse_move: WebixCallback;
      type: { [key: string]: any };
      types: { [key: string]: any };
      waitData: PromisedData;
    }
    interface datepickerConfig {
      align?: string;
      animate?: any;
      attributes?: { [key: string]: any };
      borderless?: boolean;
      bottomLabel?: any;
      bottomPadding?: any;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      editable?: boolean;
      format?: string;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      icon?: string;
      icons?: boolean;
      id?: string;
      inputHeight?: number;
      inputPadding?: number;
      inputWidth?: number;
      invalidMessage?: any;
      label?: string;
      labelPosition?: string;
      labelWidth?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: any;
      placeholder?: string;
      popup?: any;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      stringResult?: boolean;
      suggest?: string | webix.ui.baseview;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      text?: string;
      timeIcon?: string;
      timepicker?: boolean;
      tooltip?: string;
      type?: string;
      validate?: boolean;
      validateEvent?: string;
      value?: string;
      width?: number;
    }
    interface datepicker extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getPopup(): webix.ui.baseview;
      getText(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(obj: any, html: string, id: string): string;
      $renderLabel(config: any, id: string): string;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: datepickerConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface fieldsetConfig {
      animate?: any;
      body?: webix.ui.baseview;
      borderless?: boolean;
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      label?: any;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      width?: number;
    }
    interface fieldset extends webix.ui.baseview {
      adjust(): void;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      define(property: string, value: any): void;
      destructor(): void;
      disable(): void;
      enable(): void;
      getBody(): any;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: fieldsetConfig;
      name: string;
    }
    interface formConfig {
      animate?: any;
      autoheight?: boolean;
      borderless?: boolean;
      cols?: any[];
      container?: HTMLElement;
      css?: string;
      data?: string | any[];
      dataFeed?: string | WebixCallback;
      datatype?: string;
      disabled?: boolean;
      elements?: any[];
      elementsConfig?: { [key: string]: any };
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      isolate?: boolean;
      margin?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: any;
      padding?: number;
      paddingX?: number;
      paddingY?: number;
      responsive?: string;
      rows?: any[];
      rules?: any;
      scroll?: boolean | string;
      scrollSpeed?: string;
      type?: string;
      url?: string;
      visibleBatch?: string;
      width?: number;
    }
    interface form extends webix.ui.baseview {
      addView(view: any, index?: number): webix.ui.baseview;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clear(): void;
      clearValidation(): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(item: string): void;
      getChildViews(): any[];
      getCleanValues(): any;
      getDirtyValues(): any;
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getScrollState(): any;
      getTopParentView(): webix.ui.baseview;
      getValues(details?: any): { [key: string]: any };
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: any): number;
      isDirty(): boolean;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(url: string, type?: string, callback?: WebixCallback): PromisedData;
      mapEvent(map: any): void;
      parse(data: any, type: string): void;
      reconstruct(): void;
      refresh(): void;
      removeView(id: string): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      resizeChildren(): void;
      scrollTo(x: number, y: number): void;
      setDirty(mark?: boolean): void;
      setValues(values: any, update?: boolean): void;
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;
      $getSize(): any[];
      $height: number;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: formConfig;
      name: string;
    }
    interface gridsuggestConfig {
      animate?: any;
      autofit?: boolean;
      autofocus?: boolean;
      body?: string | webix.ui.baseview;
      borderless?: boolean;
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      filter?: WebixCallback;
      fitMaster?: boolean;
      gravity?: number;
      head?: any;
      headHeight?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      input?: any;
      keyPressTimeout?: number;
      left?: number;
      master?: webix.ui.baseview;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      move?: boolean;
      on?: any;
      padding?: any;
      position?: string | WebixCallback;
      relative?: string;
      template?: string | WebixTemplate;
      textValue?: string;
      top?: number;
      type?: string;
      width?: number;
      zIndex?: number;
    }
    interface gridsuggest extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      close(): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getBody(): any;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getHead(): any;
      getItemText(id: string): string;
      getList(): webix.ui.baseview;
      getMasterValue(): any;
      getNode(): any;
      getParentView(): any;
      getSuggestion(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): string | number;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      linkInput(input: HTMLElement): void;
      mapEvent(map: any): void;
      resize(): void;
      resizeChildren(): void;
      setMasterValue(value: any): void;
      setPosition(x: number, y: number): void;
      setValue(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: gridsuggestConfig;
      name: string;
    }
    interface grouplistConfig {
      animate?: any;
      autoheight?: boolean;
      autowidth?: boolean;
      borderless?: boolean;
      click?: string | WebixCallback;
      clipboard?: boolean | string;
      container?: HTMLElement;
      css?: string;
      data?: string | any[];
      dataFeed?: string | WebixCallback;
      datathrottle?: number;
      datatype?: string;
      disabled?: boolean;
      drag?: boolean | string;
      dragscroll?: boolean | string;
      externalData?: WebixCallback;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      layout?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multiselect?: any;
      navigation?: boolean;
      on?: any;
      onClick?: { [key: string]: any };
      onContext?: { [key: string]: any };
      onDblClick?: WebixCallback;
      onMouseMove?: WebixCallback;
      pager?: any;
      ready?: WebixCallback;
      removeMissed?: boolean;
      rules?: any;
      save?: string;
      scheme?: any;
      scroll?: boolean | string;
      scrollSpeed?: string;
      select?: boolean | string;
      template?: string | WebixCallback;
      templateBack?: string | WebixTemplate;
      templateCopy?: WebixCallback;
      templateGroup?: string | WebixTemplate;
      templateItem?: string | WebixTemplate;
      tooltip?: any;
      type?: any;
      url?: string;
      width?: number;
      xCount?: number;
      yCount?: number;
    }
    interface grouplist extends webix.ui.baseview {
      add(obj: any, index?: number): string;
      addCss(id: string | number, css: string, silent?: boolean): void;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      copy(sid: string, tindex: number, tobj?: any, details?: any): void;
      count(): number;
      customize(obj: any): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      exists(id: string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value: string,
        preserve: boolean,
      ): void;
      getChildViews(): any[];
      getFirstId(): string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number): string;
      getIndexById(id: string): number;
      getItem(id: string): any;
      getItemNode(id: string): void;
      getLastId(): string;
      getNextId(id: string, step: number): string;
      getNode(): any;
      getOpenState(): any;
      getPage(): number;
      getPager(): any;
      getParentView(): any;
      getPrevId(id: string, step: number): string;
      getScrollState(): any;
      getSelectedId(as_array: boolean): string | any[];
      getSelectedItem(as_array?: boolean): any;
      getTopParentView(): webix.ui.baseview;
      getVisibleCount(): number;
      group(config: any, mode: boolean): void;
      hasCss(id: string, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isSelected(id: string): boolean;
      isVisible(): boolean;
      load(url: string, type?: string, callback?: WebixCallback): PromisedData;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
      ): void;
      locate(e: Event): string;
      mapEvent(map: any): void;
      move(sid: string, tindex: number, tobj?: any, details?: any): string;
      moveBottom(id: string): void;
      moveDown(id: string, step: number): void;
      moveSelection(direction: string): void;
      moveTop(id: string): void;
      moveUp(id: string, step: number): void;
      parse(data: any, type: string): void;
      refresh(id?: string): void;
      remove(id: string): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      select(id: string | any[], preserve: boolean): void;
      selectAll(from?: string, to?: string): void;
      serialize(): any;
      setPage(page: number): void;
      show(force?: boolean, animation?: boolean): void;
      showItem(id: string): void;
      sort(by: string, dir?: string, as?: string): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      ungroup(mode: boolean): void;
      unselect(id?: string): void;
      unselectAll(): void;
      updateItem(id: string, data: any): void;
      validate(id?: string): boolean;
      $drag(source: HTMLElement, ev: Event): string;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: any, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event,
      ): void;
      $drop(source: HTMLElement, target: HTMLElement, ev: any): void;
      $dropAllow: WebixCallback;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: grouplistConfig;
      name: string;
      on_click: WebixCallback;
      on_context: { [key: string]: any };
      on_dblclick: WebixCallback;
      on_mouse_move: WebixCallback;
      type: { [key: string]: any };
      types: { [key: string]: any };
    }
    interface headerlayoutConfig {
      animate?: any;
      borderless?: boolean;
      collapsed?: boolean;
      cols?: any[];
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      isolate?: boolean;
      margin?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      multi?: boolean | string;
      on?: any;
      padding?: number;
      paddingX?: number;
      paddingY?: number;
      panelClass?: string;
      responsive?: string;
      rows?: any[];
      type?: string;
      visibleBatch?: string;
      width?: number;
    }
    interface headerlayout extends webix.ui.baseview {
      addView(view: any, index?: number): webix.ui.baseview;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: any): number;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      reconstruct(): void;
      removeView(id: string): void;
      resize(): void;
      resizeChildren(): void;
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: headerlayoutConfig;
      name: string;
    }
    interface htmlformConfig {
      animate?: any;
      autoheight?: any;
      borderless?: boolean;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      data?: string | any[];
      dataFeed?: string | WebixCallback;
      datatype?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: any;
      onClick?: { [key: string]: any };
      scroll?: boolean | string;
      scrollSpeed?: string;
      src?: string;
      template?: string | WebixCallback;
      type?: string;
      url?: string;
      width?: number;
    }
    interface htmlform extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clear(all?: boolean): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(item: string): void;
      getChildViews(): any[];
      getCleanValues(): any;
      getDirtyValues(): any;
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getScrollState(): any;
      getTopParentView(): webix.ui.baseview;
      getValues(details?: any): { [key: string]: any };
      hasEvent(name: string): boolean;
      hide(): void;
      isDirty(): boolean;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(url: string, type?: string, callback?: WebixCallback): PromisedData;
      mapEvent(map: any): void;
      parse(data: any, type: string): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      setContent(node: any): void;
      setDirty(mark?: boolean): void;
      setHTML(html: string): void;
      setValues(values: any, update?: boolean): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: htmlformConfig;
      name: string;
    }
    interface iconConfig {
      align?: string;
      animate?: any;
      borderless?: boolean;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string;
      inputHeight?: number;
      inputWidth?: number;
      label?: string;
      labelPosition?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: any;
      placeholder?: string;
      popup?: any;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      tooltip?: string;
      type?: string;
      value?: string;
      width?: number;
    }
    interface icon extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: iconConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface iframeConfig {
      animate?: any;
      borderless?: boolean;
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: any;
      src?: string;
      width?: number;
    }
    interface iframe extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getIframe(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      getWindow(): HTMLElement;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(value: string): void;
      mapEvent(map: any): void;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: iframeConfig;
      name: string;
    }
    interface labelConfig {
      align?: string;
      animate?: any;
      borderless?: boolean;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string;
      inputHeight?: number;
      inputWidth?: number;
      label?: string;
      labelPosition?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: any;
      placeholder?: string;
      popup?: any;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      tooltip?: string;
      type?: string;
      value?: string;
      width?: number;
    }
    interface label extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setHTML(html: string): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: labelConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface layoutConfig {
      animate?: any;
      borderless?: boolean;
      cols?: any[];
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      isolate?: boolean;
      margin?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: any;
      padding?: number;
      paddingX?: number;
      paddingY?: number;
      responsive?: string;
      rows?: any[];
      type?: string;
      visibleBatch?: string;
      width?: number;
    }
    interface layout extends webix.ui.baseview {
      addView(view: any, index?: number): webix.ui.baseview;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: any): number;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      reconstruct(): void;
      removeView(id: string): void;
      resize(): void;
      resizeChildren(): void;
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: layoutConfig;
      name: string;
    }
    interface listConfig {
      animate?: any;
      autoheight?: boolean;
      autowidth?: boolean;
      borderless?: boolean;
      click?: string | WebixCallback;
      clipboard?: boolean | string;
      container?: HTMLElement;
      css?: string;
      data?: string | any[];
      dataFeed?: string | WebixCallback;
      datathrottle?: number;
      datatype?: string;
      disabled?: boolean;
      drag?: boolean | string;
      dragscroll?: boolean | string;
      externalData?: WebixCallback;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      layout?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multiselect?: any;
      navigation?: boolean;
      on?: any;
      onClick?: { [key: string]: any };
      onContext?: { [key: string]: any };
      onDblClick?: WebixCallback;
      onMouseMove?: WebixCallback;
      pager?: any;
      ready?: WebixCallback;
      removeMissed?: boolean;
      rules?: any;
      save?: string;
      scheme?: any;
      scroll?: boolean | string;
      scrollSpeed?: string;
      select?: boolean | string;
      template?: string | WebixCallback;
      templateCopy?: WebixCallback;
      tooltip?: any;
      type?: any;
      url?: string;
      width?: number;
      xCount?: number;
      yCount?: number;
    }
    interface list extends webix.ui.baseview {
      add(obj: any, index?: number): string;
      addCss(id: string | number, css: string, silent?: boolean): void;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      copy(sid: string, tindex: number, tobj?: any, details?: any): void;
      count(): number;
      customize(obj: any): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      exists(id: string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value: string,
        preserve: boolean,
      ): void;
      getChildViews(): any[];
      getFirstId(): string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number): string;
      getIndexById(id: string): number;
      getItem(id: string): any;
      getItemNode(id: string): void;
      getLastId(): string;
      getNextId(id: string, step: number): string;
      getNode(): any;
      getPage(): number;
      getPager(): any;
      getParentView(): any;
      getPrevId(id: string, step: number): string;
      getScrollState(): any;
      getSelectedId(as_array: boolean): string | any[];
      getSelectedItem(as_array?: boolean): any;
      getTopParentView(): webix.ui.baseview;
      getVisibleCount(): number;
      hasCss(id: string, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isSelected(id: string): boolean;
      isVisible(): boolean;
      load(url: string, type?: string, callback?: WebixCallback): PromisedData;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
      ): void;
      locate(e: Event): string;
      mapEvent(map: any): void;
      move(sid: string, tindex: number, tobj?: any, details?: any): string;
      moveBottom(id: string): void;
      moveDown(id: string, step: number): void;
      moveSelection(direction: string): void;
      moveTop(id: string): void;
      moveUp(id: string, step: number): void;
      parse(data: any, type: string): void;
      refresh(id?: string): void;
      remove(id: string): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      select(id: string | any[], preserve: boolean): void;
      selectAll(from?: string, to?: string): void;
      serialize(): any;
      setPage(page: number): void;
      show(force?: boolean, animation?: boolean): void;
      showItem(id: string): void;
      sort(by: string, dir?: string, as?: string): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      unselect(id?: string): void;
      unselectAll(): void;
      updateItem(id: string, data: any): void;
      validate(id?: string): boolean;
      $drag(source: HTMLElement, ev: Event): string;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: any, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event,
      ): void;
      $drop(source: HTMLElement, target: HTMLElement, ev: any): void;
      $dropAllow: WebixCallback;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: listConfig;
      name: string;
      on_click: WebixCallback;
      on_context: { [key: string]: any };
      on_dblclick: WebixCallback;
      on_mouse_move: WebixCallback;
      type: { [key: string]: any };
      types: { [key: string]: any };
    }
    interface menuConfig {
      animate?: any;
      autoheight?: boolean;
      autowidth?: boolean;
      borderless?: boolean;
      click?: string | WebixCallback;
      clipboard?: boolean | string;
      container?: HTMLElement;
      css?: string;
      data?: string | any[];
      dataFeed?: string | WebixCallback;
      datathrottle?: number;
      datatype?: string;
      disabled?: boolean;
      drag?: boolean | string;
      dragscroll?: boolean | string;
      externalData?: WebixCallback;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      layout?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multiselect?: any;
      navigation?: boolean;
      on?: any;
      onClick?: { [key: string]: any };
      onContext?: { [key: string]: any };
      onDblClick?: WebixCallback;
      onMouseMove?: WebixCallback;
      pager?: any;
      ready?: WebixCallback;
      removeMissed?: boolean;
      rules?: any;
      save?: string;
      scheme?: any;
      scroll?: boolean | string;
      scrollSpeed?: string;
      select?: boolean | string;
      subMenuPos?: string;
      submenu?: any;
      template?: string | WebixCallback;
      templateCopy?: WebixCallback;
      tooltip?: any;
      type?: any;
      url?: string;
      width?: number;
      xCount?: number;
      yCount?: number;
    }
    interface menu extends webix.ui.baseview {
      add(obj: any, index?: number): string;
      addCss(id: string | number, css: string, silent?: boolean): void;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      copy(sid: string, tindex: number, tobj?: any, details?: any): void;
      count(): number;
      customize(obj: any): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      disableItem(id: string): void;
      enable(): void;
      enableItem(id: string): void;
      exists(id: string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value: string,
        preserve: boolean,
      ): void;
      getChildViews(): any[];
      getFirstId(): string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number): string;
      getIndexById(id: string): number;
      getItem(id: string): any;
      getItemNode(id: string): void;
      getLastId(): string;
      getMenu(id: string | number): any;
      getMenuItem(id: string): any;
      getNextId(id: string, step: number): string;
      getNode(): any;
      getPage(): number;
      getPager(): any;
      getParentView(): any;
      getPrevId(id: string, step: number): string;
      getScrollState(): any;
      getSelectedId(as_array: boolean): string | any[];
      getSelectedItem(as_array?: boolean): any;
      getSubMenu(id: string | number): any;
      getTopMenu(): any;
      getTopParentView(): webix.ui.baseview;
      getVisibleCount(): number;
      hasCss(id: string, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      hideItem(id: string): void;
      isEnabled(): boolean;
      isSelected(id: string): boolean;
      isVisible(): boolean;
      load(url: string, type?: string, callback?: WebixCallback): PromisedData;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
      ): void;
      locate(e: Event): string;
      mapEvent(map: any): void;
      move(sid: string, tindex: number, tobj?: any, details?: any): string;
      moveBottom(id: string): void;
      moveDown(id: string, step: number): void;
      moveSelection(direction: string): void;
      moveTop(id: string): void;
      moveUp(id: string, step: number): void;
      parse(data: any, type: string): void;
      refresh(id?: string): void;
      remove(id: string): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      select(id: string | any[], preserve: boolean): void;
      selectAll(from?: string, to?: string): void;
      serialize(): any;
      setPage(page: number): void;
      show(force?: boolean, animation?: boolean): void;
      showItem(id: string): void;
      sort(by: string, dir?: string, as?: string): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      unselect(id?: string): void;
      unselectAll(): void;
      updateItem(id: string, data: any): void;
      validate(id?: string): boolean;
      $drag(source: HTMLElement, ev: Event): string;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: any, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event,
      ): void;
      $drop(source: HTMLElement, target: HTMLElement, ev: any): void;
      $dropAllow: WebixCallback;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: menuConfig;
      name: string;
      on_click: WebixCallback;
      on_context: { [key: string]: any };
      on_dblclick: WebixCallback;
      on_mouse_move: WebixCallback;
      type: { [key: string]: any };
      types: { [key: string]: any };
    }
    interface multicomboConfig {
      align?: string;
      animate?: any;
      attributes?: { [key: string]: any };
      borderless?: boolean;
      bottomLabel?: any;
      bottomPadding?: any;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      icon?: string;
      iconWidth?: any;
      id?: string;
      inputHeight?: number;
      inputPadding?: number;
      inputWidth?: number;
      invalidMessage?: any;
      label?: string;
      labelPosition?: string;
      labelWidth?: number;
      master?: any;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: any;
      optionWidth?: number;
      options?: any;
      placeholder?: string;
      popup?: any;
      popupWidth?: number;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      separator?: string;
      suggest?: string | webix.ui.baseview;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      text?: string;
      tooltip?: string;
      type?: string;
      validate?: boolean;
      validateEvent?: string;
      value?: string;
      width?: number;
    }
    interface multicombo extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getPopup(): webix.ui.baseview;
      getText(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;
      $cssName: string;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(obj: any, html: string, id: string): string;
      $renderLabel(config: any, id: string): string;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: multicomboConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface multiselectConfig {
      align?: string;
      animate?: any;
      attributes?: { [key: string]: any };
      borderless?: boolean;
      bottomLabel?: any;
      bottomPadding?: any;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      icon?: string;
      id?: string;
      inputHeight?: number;
      inputPadding?: number;
      inputWidth?: number;
      invalidMessage?: any;
      label?: string;
      labelPosition?: string;
      labelWidth?: number;
      master?: any;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: any;
      optionWidth?: number;
      options?: any;
      placeholder?: string;
      popup?: any;
      popupWidth?: number;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      separator?: string;
      suggest?: string | webix.ui.baseview;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      text?: string;
      tooltip?: string;
      type?: string;
      validate?: boolean;
      validateEvent?: string;
      value?: string;
      width?: number;
    }
    interface multiselect extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getPopup(): webix.ui.baseview;
      getText(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;
      $cssName: string;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(obj: any, html: string, id: string): string;
      $renderLabel(config: any, id: string): string;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: multiselectConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface multisuggestConfig {
      animate?: any;
      autofit?: boolean;
      autofocus?: boolean;
      body?: string | webix.ui.baseview;
      borderless?: boolean;
      button?: boolean;
      buttonText?: string;
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      filter?: WebixCallback;
      fitMaster?: boolean;
      gravity?: number;
      head?: any;
      headHeight?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      input?: any;
      keyPressTimeout?: number;
      left?: number;
      master?: webix.ui.baseview;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      move?: boolean;
      on?: any;
      padding?: any;
      position?: string | WebixCallback;
      relative?: string;
      separator?: string;
      template?: string | WebixTemplate;
      textValue?: string;
      top?: number;
      type?: string;
      width?: number;
      zIndex?: number;
    }
    interface multisuggest extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      close(): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getBody(): any;
      getButton(): webix.ui.baseview;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getHead(): any;
      getItemText(id: string): string;
      getList(): webix.ui.baseview;
      getMasterValue(): any;
      getNode(): any;
      getParentView(): any;
      getSuggestion(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): string | number;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      linkInput(input: HTMLElement): void;
      mapEvent(map: any): void;
      resize(): void;
      resizeChildren(): void;
      setMasterValue(value: any): void;
      setPosition(x: number, y: number): void;
      setValue(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: multisuggestConfig;
      name: string;
    }
    interface multitextConfig {
      align?: string;
      animate?: any;
      attributes?: { [key: string]: any };
      borderless?: boolean;
      bottomLabel?: any;
      bottomPadding?: any;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      icon?: string;
      iconWidth?: string;
      id?: string;
      inputHeight?: number;
      inputPadding?: number;
      inputWidth?: number;
      invalidMessage?: any;
      label?: string;
      labelPosition?: string;
      labelWidth?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: any;
      placeholder?: string;
      popup?: any;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      separator?: string;
      suggest?: string | webix.ui.baseview;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      tooltip?: string;
      type?: string;
      validate?: boolean;
      validateEvent?: string;
      value?: string;
      width?: number;
    }
    interface multitext extends webix.ui.baseview {
      addSection(): string | number;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      getValueHere(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      removeSection(id?: string | number): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: string): void;
      setValueHere(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;
      $cssName: string;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(obj: any, html: string, id: string): string;
      $renderLabel(config: any, id: string): string;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: multitextConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface multiviewConfig {
      animate?: any;
      borderless?: boolean;
      cells?: any;
      cols?: any[];
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      fitBiggest?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      keepViews?: any;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: any;
      responsive?: string;
      rows?: any[];
      visibleBatch?: string;
      width?: number;
    }
    interface multiview extends webix.ui.baseview {
      addView(view: any, index?: number): webix.ui.baseview;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      back(step: number): void;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getActiveId(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: any): number;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      reconstruct(): void;
      removeView(id: string): void;
      resize(): void;
      resizeChildren(): void;
      setValue(toshow: string): void;
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: multiviewConfig;
      name: string;
    }
    interface organogramConfig {
      animate?: any;
      autoheight?: boolean;
      autowidth?: boolean;
      borderless?: boolean;
      click?: string | WebixCallback;
      container?: HTMLElement;
      css?: string;
      data?: string | any[];
      dataFeed?: string | WebixCallback;
      datathrottle?: number;
      datatype?: string;
      disabled?: boolean;
      filterMode?: any;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multiselect?: any;
      on?: any;
      onClick?: { [key: string]: any };
      onContext?: { [key: string]: any };
      onDblClick?: WebixCallback;
      onMouseMove?: WebixCallback;
      ready?: WebixCallback;
      removeMissed?: boolean;
      save?: string;
      scheme?: any;
      scroll?: boolean | string;
      scrollSpeed?: string;
      select?: boolean | string;
      template?: string | WebixCallback;
      threeState?: boolean;
      tooltip?: any;
      type?: any;
      url?: string;
      width?: number;
    }
    interface organogram extends webix.ui.baseview {
      add(obj: any, index?: number): string;
      addCss(id: string | number, css: string, silent?: boolean): void;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(): void;
      clearCss(css: string, silent?: boolean): void;
      close(id: string): void;
      closeAll(): void;
      count(): number;
      customize(obj: any): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      exists(id: string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value: string,
        preserve: boolean,
      ): void;
      getBranchIndex(id: string, parent?: string): number;
      getChildViews(): any[];
      getFirstChildId(id: string): string;
      getFirstId(): string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number): string;
      getIndexById(id: string): number;
      getItem(id: string): any;
      getItemNode(id: string): void;
      getLastId(): string;
      getNextId(id: string, step: number): string;
      getNextSiblingId(id: any): string;
      getNode(): any;
      getOpenItems(): any[];
      getParentId(id: string): string;
      getParentView(): any;
      getPrevId(id: string, step: number): string;
      getPrevSiblingId(id: any): string;
      getScrollState(): any;
      getSelectedId(as_array: boolean): string | any[];
      getSelectedItem(as_array?: boolean): any;
      getState(): any;
      getTopParentView(): webix.ui.baseview;
      group(config: any, mode: boolean): void;
      hasCss(id: string, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      isBranch(id: string): boolean;
      isBranchOpen(id: string): boolean;
      isEnabled(): boolean;
      isSelected(id: string): boolean;
      isVisible(): boolean;
      load(url: string, type?: string, callback?: WebixCallback): PromisedData;
      loadBranch(id: string, callback: WebixCallback, url: string): void;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
      ): void;
      locate(e: Event): string;
      mapEvent(map: any): void;
      open(id: string): void;
      openAll(): void;
      parse(data: any, type: string): void;
      refresh(id?: string): void;
      remove(id: string): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      select(id: string | any[], preserve: boolean): void;
      selectAll(from?: string, to?: string): void;
      serialize(): any;
      setState(state: any): void;
      show(force?: boolean, animation?: boolean): void;
      showItem(id: string): void;
      sort(by: string, dir?: string, as?: string): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      ungroup(mode: boolean): void;
      unselect(id?: string): void;
      unselectAll(): void;
      updateItem(id: string, data: any): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: organogramConfig;
      name: string;
      on_click: WebixCallback;
      on_context: { [key: string]: any };
      on_dblclick: WebixCallback;
      on_mouse_move: WebixCallback;
      type: { [key: string]: any };
      types: { [key: string]: any };
    }
    interface pagerConfig {
      animate?: any;
      apiOnly?: any;
      borderless?: boolean;
      container?: HTMLElement;
      content?: string | HTMLElement;
      count?: number;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      group?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      limit?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      on?: any;
      onClick?: { [key: string]: any };
      onContext?: { [key: string]: any };
      onDblClick?: WebixCallback;
      onMouseMove?: WebixCallback;
      page?: number;
      size?: number;
      template?: string | WebixCallback;
      width?: number;
    }
    interface pager extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clone(config: any): any;
      customize(obj: any): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(id?: string): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      select(page: number): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: pagerConfig;
      name: string;
      on_click: WebixCallback;
      on_context: { [key: string]: any };
      on_dblclick: WebixCallback;
      on_mouse_move: WebixCallback;
      type: { [key: string]: any };
    }
    interface popupConfig {
      animate?: any;
      autofit?: boolean;
      autofocus?: boolean;
      body?: string | webix.ui.baseview;
      borderless?: boolean;
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      head?: any;
      headHeight?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      left?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      move?: boolean;
      on?: any;
      padding?: any;
      position?: string | WebixCallback;
      relative?: string;
      top?: number;
      width?: number;
      zIndex?: number;
    }
    interface popup extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      close(): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getBody(): any;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getHead(): any;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      resize(): void;
      resizeChildren(): void;
      setPosition(x: number, y: number): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: popupConfig;
      name: string;
    }
    interface portletConfig {
      animate?: any;
      body?: string | webix.ui.baseview;
      borderless?: boolean;
      cols?: any[];
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      isolate?: boolean;
      layoutType?: string;
      margin?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: any;
      padding?: number;
      paddingX?: number;
      paddingY?: number;
      responsive?: string;
      rows?: any[];
      type?: string;
      visibleBatch?: string;
      width?: number;
    }
    interface portlet extends webix.ui.baseview {
      addView(view: any, index?: number): webix.ui.baseview;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: any): number;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      markDropArea(target: string, mode: string): void;
      movePortlet(target: string, mode: string): void;
      reconstruct(): void;
      removeView(id: string): void;
      resize(): void;
      resizeChildren(): void;
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string): void;
      unbind(): void;
      unblockEvent(): void;
      $drag(source: HTMLElement, ev: Event): string;
      $getSize(): any[];
      $height: number;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: portletConfig;
      name: string;
    }
    interface propertyConfig {
      animate?: any;
      autoheight?: boolean;
      borderless?: boolean;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      data?: string | any[];
      dataFeed?: string | WebixCallback;
      datatype?: string;
      disabled?: boolean;
      editValue?: string;
      editable?: boolean;
      editaction?: string;
      elements?: any;
      form?: string;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      nameWidth?: number;
      on?: any;
      onClick?: { [key: string]: any };
      onContext?: { [key: string]: any };
      onDblClick?: WebixCallback;
      onMouseMove?: WebixCallback;
      scroll?: boolean | string;
      scrollSpeed?: string;
      template?: string | WebixCallback;
      url?: string;
      width?: number;
    }
    interface property extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      customize(obj: any): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      edit(id: any): void;
      editCancel(): void;
      editNext(): boolean;
      editStop(): void;
      enable(): void;
      focusEditor(): void;
      getChildViews(): any[];
      getEditState(): any;
      getEditor(id?: string): any;
      getEditorValue(): string;
      getFormView(): webix.ui.baseview;
      getItem(id: string): any;
      getItemNode(id: string): void;
      getNode(): any;
      getParentView(): any;
      getScrollState(): any;
      getTopParentView(): webix.ui.baseview;
      getValues(): { [key: string]: any };
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(url: string, type?: string, callback?: WebixCallback): PromisedData;
      locate(e: Event): string;
      mapEvent(map: any): void;
      parse(data: any, type: string): void;
      refresh(id?: string): void;
      registerType(name: string, data: any): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      setValues(values: any, update?: boolean): void;
      show(force?: boolean, animation?: boolean): void;
      showItem(id: string): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      updateItem(): void;
      validateEditor(id?: string): boolean;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: propertyConfig;
      name: string;
      on_click: WebixCallback;
      on_context: { [key: string]: any };
      on_dblclick: WebixCallback;
      on_edit: { [key: string]: any };
      on_mouse_move: WebixCallback;
      on_render: { [key: string]: any };
      type: { [key: string]: any };
    }
    interface radioConfig {
      align?: string;
      animate?: any;
      attributes?: { [key: string]: any };
      borderless?: boolean;
      bottomLabel?: any;
      bottomPadding?: any;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      customRadio?: boolean;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string;
      inputHeight?: number;
      inputPadding?: number;
      inputWidth?: number;
      invalidMessage?: any;
      label?: string;
      labelPosition?: string;
      labelWidth?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: any;
      optionHeight?: number;
      options?: any[];
      placeholder?: string;
      popup?: any;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?: string | webix.ui.baseview;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      tooltip?: string;
      type?: string;
      validate?: boolean;
      validateEvent?: string;
      value?: string;
      vertical?: boolean;
      width?: number;
    }
    interface radio extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(obj: any, html: string, id: string): string;
      $renderLabel(config: any, id: string): string;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: radioConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface rangesliderConfig {
      align?: string;
      animate?: any;
      attributes?: { [key: string]: any };
      borderless?: boolean;
      bottomLabel?: any;
      bottomPadding?: any;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string;
      inputHeight?: number;
      inputPadding?: number;
      inputWidth?: number;
      invalidMessage?: any;
      label?: string;
      labelPosition?: string;
      labelWidth?: number;
      max?: any;
      maxHeight?: number;
      maxWidth?: number;
      min?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: any;
      placeholder?: string;
      popup?: any;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      separator?: string;
      step?: number;
      stringResult?: boolean;
      suggest?: string | webix.ui.baseview;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      title?: string | WebixCallback;
      tooltip?: string;
      type?: string;
      validate?: boolean;
      validateEvent?: string;
      value?: string;
      width?: number;
    }
    interface rangeslider extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;
      $cssName: string;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(obj: any, html: string, id: string): string;
      $renderLabel(config: any, id: string): string;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $touchCapture: boolean;
      $view: HTMLElement;
      $width: number;
      config: rangesliderConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface resizerConfig {
      animate?: any;
      borderless?: boolean;
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      onClick?: { [key: string]: any };
      onContext?: { [key: string]: any };
      onDblClick?: WebixCallback;
      onMouseMove?: WebixCallback;
      width?: number;
    }
    interface resizer extends webix.ui.baseview {
      adjust(): void;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      define(property: string, value: any): void;
      destructor(): void;
      disable(): void;
      enable(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: resizerConfig;
      name: string;
      on_click: WebixCallback;
      on_context: { [key: string]: any };
      on_dblclick: WebixCallback;
      on_mouse_move: WebixCallback;
    }
    interface richselectConfig {
      align?: string;
      animate?: any;
      attributes?: { [key: string]: any };
      borderless?: boolean;
      bottomLabel?: any;
      bottomPadding?: any;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      icon?: string;
      id?: string;
      inputHeight?: number;
      inputPadding?: number;
      inputWidth?: number;
      invalidMessage?: any;
      label?: string;
      labelPosition?: string;
      labelWidth?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: any;
      options?: any;
      placeholder?: string;
      popup?: any;
      popupWidth?: number;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?: string | webix.ui.baseview;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      text?: string;
      tooltip?: string;
      type?: string;
      validate?: boolean;
      validateEvent?: string;
      value?: string;
      width?: number;
    }
    interface richselect extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getPopup(): webix.ui.baseview;
      getText(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(obj: any, html: string, id: string): string;
      $renderLabel(config: any, id: string): string;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: richselectConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface scrollviewConfig {
      animate?: any;
      body?: any;
      borderless?: boolean;
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      scroll?: boolean | string;
      scrollSpeed?: string;
      width?: number;
    }
    interface scrollview extends webix.ui.baseview {
      adjust(): void;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      define(property: string, value: any): void;
      destructor(): void;
      disable(): void;
      enable(): void;
      getBody(): any;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getScrollState(): any;
      getTopParentView(): webix.ui.baseview;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      resize(): void;
      resizeChildren(): void;
      scrollTo(x: number, y: number): void;
      show(force?: boolean, animation?: boolean): void;
      showView(id: string): void;
      unbind(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: scrollviewConfig;
      name: string;
    }
    interface searchConfig {
      align?: string;
      animate?: any;
      attributes?: { [key: string]: any };
      borderless?: boolean;
      bottomLabel?: any;
      bottomPadding?: any;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      icon?: string;
      id?: string;
      inputHeight?: number;
      inputPadding?: number;
      inputWidth?: number;
      invalidMessage?: any;
      label?: string;
      labelPosition?: string;
      labelWidth?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: any;
      placeholder?: string;
      popup?: any;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?: string | webix.ui.baseview;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      tooltip?: string;
      type?: string;
      validate?: boolean;
      validateEvent?: string;
      value?: string;
      width?: number;
    }
    interface search extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(obj: any, html: string, id: string): string;
      $renderLabel(config: any, id: string): string;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: searchConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface segmentedConfig {
      align?: string;
      animate?: any;
      attributes?: { [key: string]: any };
      borderless?: boolean;
      bottomLabel?: any;
      bottomPadding?: any;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string;
      inputHeight?: number;
      inputPadding?: number;
      inputWidth?: number;
      invalidMessage?: any;
      label?: string;
      labelPosition?: string;
      labelWidth?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      multiview?: boolean;
      name?: string;
      on?: any;
      options?: any;
      placeholder?: string;
      popup?: any;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?: string | webix.ui.baseview;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      tooltip?: string;
      type?: string;
      validate?: boolean;
      validateEvent?: string;
      value?: string;
      width?: number;
    }
    interface segmented extends webix.ui.baseview {
      addOption(id: string, value: any, show?: boolean, index?: number): void;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      optionIndex(ID: string): number;
      refresh(): void;
      removeOption(id: string): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(obj: any, html: string, id: string): string;
      $renderLabel(config: any, id: string): string;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: segmentedConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface selectConfig {
      align?: string;
      animate?: any;
      attributes?: { [key: string]: any };
      borderless?: boolean;
      bottomLabel?: any;
      bottomPadding?: any;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string;
      inputHeight?: number;
      inputPadding?: number;
      inputWidth?: number;
      invalidMessage?: any;
      label?: string;
      labelPosition?: string;
      labelWidth?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: any;
      options?: any[] | string;
      placeholder?: string;
      popup?: any;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?: string | webix.ui.baseview;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      tooltip?: string;
      type?: string;
      validate?: boolean;
      validateEvent?: string;
      value?: string;
      width?: number;
    }
    interface select extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(obj: any, html: string, id: string): string;
      $renderLabel(config: any, id: string): string;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: selectConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface sliderConfig {
      align?: string;
      animate?: any;
      attributes?: { [key: string]: any };
      borderless?: boolean;
      bottomLabel?: any;
      bottomPadding?: any;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string;
      inputHeight?: number;
      inputPadding?: number;
      inputWidth?: number;
      invalidMessage?: any;
      label?: string;
      labelPosition?: string;
      labelWidth?: number;
      max?: any;
      maxHeight?: number;
      maxWidth?: number;
      min?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: any;
      placeholder?: string;
      popup?: any;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      step?: number;
      suggest?: string | webix.ui.baseview;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      title?: string | WebixCallback;
      tooltip?: string;
      type?: string;
      validate?: boolean;
      validateEvent?: string;
      value?: string;
      width?: number;
    }
    interface slider extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(obj: any, html: string, id: string): string;
      $renderLabel(config: any, id: string): string;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $touchCapture: boolean;
      $view: HTMLElement;
      $width: number;
      config: sliderConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface spacerConfig {
      animate?: any;
      borderless?: boolean;
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      width?: number;
    }
    interface spacer extends webix.ui.baseview {
      adjust(): void;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      define(property: string, value: any): void;
      destructor(): void;
      disable(): void;
      enable(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: spacerConfig;
      name: string;
    }
    interface submenuConfig {
      animate?: any;
      autofit?: boolean;
      autofocus?: boolean;
      autoheight?: boolean;
      autowidth?: boolean;
      body?: string | webix.ui.baseview;
      borderless?: boolean;
      click?: string | WebixCallback;
      clipboard?: boolean | string;
      container?: HTMLElement;
      css?: string;
      data?: string | any[];
      dataFeed?: string | WebixCallback;
      datathrottle?: number;
      datatype?: string;
      disabled?: boolean;
      drag?: boolean | string;
      dragscroll?: boolean | string;
      externalData?: WebixCallback;
      gravity?: number;
      head?: any;
      headHeight?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      layout?: string;
      left?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      mouseEventDelay?: number;
      move?: boolean;
      multiselect?: any;
      navigation?: boolean;
      on?: any;
      onClick?: { [key: string]: any };
      onContext?: { [key: string]: any };
      onDblClick?: WebixCallback;
      onMouseMove?: WebixCallback;
      padding?: any;
      pager?: any;
      position?: string | WebixCallback;
      ready?: WebixCallback;
      relative?: string;
      removeMissed?: boolean;
      rules?: any;
      save?: string;
      scheme?: any;
      scroll?: boolean | string;
      scrollSpeed?: string;
      select?: boolean | string;
      subMenuPos?: string;
      submenu?: any;
      template?: string | WebixCallback;
      templateCopy?: WebixCallback;
      tooltip?: any;
      top?: number;
      type?: any;
      url?: string;
      width?: number;
      xCount?: number;
      yCount?: number;
      zIndex?: number;
    }
    interface submenu extends webix.ui.baseview {
      add(obj: any, index?: number): string;
      addCss(id: string | number, css: string, silent?: boolean): void;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      close(): void;
      copy(sid: string, tindex: number, tobj?: any, details?: any): void;
      count(): number;
      customize(obj: any): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      disableItem(id: string): void;
      enable(): void;
      enableItem(id: string): void;
      exists(id: string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value: string,
        preserve: boolean,
      ): void;
      getBody(): any;
      getChildViews(): any[];
      getFirstId(): string;
      getFormView(): webix.ui.baseview;
      getHead(): any;
      getIdByIndex(index: number): string;
      getIndexById(id: string): number;
      getItem(id: string): any;
      getItemNode(id: string): void;
      getLastId(): string;
      getMenu(id: string | number): any;
      getMenuItem(id: string): any;
      getNextId(id: string, step: number): string;
      getNode(): any;
      getPage(): number;
      getPager(): any;
      getParentView(): any;
      getPrevId(id: string, step: number): string;
      getScrollState(): any;
      getSelectedId(as_array: boolean): string | any[];
      getSelectedItem(as_array?: boolean): any;
      getSubMenu(id: string | number): any;
      getTopMenu(): any;
      getTopParentView(): webix.ui.baseview;
      getVisibleCount(): number;
      hasCss(id: string, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      hideItem(id: string): void;
      isEnabled(): boolean;
      isSelected(id: string): boolean;
      isVisible(): boolean;
      load(url: string, type?: string, callback?: WebixCallback): PromisedData;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
      ): void;
      locate(e: Event): string;
      mapEvent(map: any): void;
      move(sid: string, tindex: number, tobj?: any, details?: any): string;
      moveBottom(id: string): void;
      moveDown(id: string, step: number): void;
      moveSelection(direction: string): void;
      moveTop(id: string): void;
      moveUp(id: string, step: number): void;
      parse(data: any, type: string): void;
      refresh(id?: string): void;
      remove(id: string): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      resizeChildren(): void;
      scrollTo(x: number, y: number): void;
      select(id: string | any[], preserve: boolean): void;
      selectAll(from?: string, to?: string): void;
      serialize(): any;
      setPage(page: number): void;
      setPosition(x: number, y: number): void;
      show(force?: boolean, animation?: boolean): void;
      showItem(id: string): void;
      sort(by: string, dir?: string, as?: string): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      unselect(id?: string): void;
      unselectAll(): void;
      updateItem(id: string, data: any): void;
      validate(id?: string): boolean;
      $drag(source: HTMLElement, ev: Event): string;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: any, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event,
      ): void;
      $drop(source: HTMLElement, target: HTMLElement, ev: any): void;
      $dropAllow: WebixCallback;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: submenuConfig;
      name: string;
      on_click: WebixCallback;
      on_context: { [key: string]: any };
      on_dblclick: WebixCallback;
      on_mouse_move: WebixCallback;
      type: { [key: string]: any };
      types: { [key: string]: any };
    }
    interface suggestConfig {
      animate?: any;
      autofit?: boolean;
      autofocus?: boolean;
      body?: string | webix.ui.baseview;
      borderless?: boolean;
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      filter?: WebixCallback;
      fitMaster?: boolean;
      gravity?: number;
      head?: any;
      headHeight?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      input?: any;
      keyPressTimeout?: number;
      left?: number;
      master?: webix.ui.baseview;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      move?: boolean;
      on?: any;
      padding?: any;
      position?: string | WebixCallback;
      relative?: string;
      template?: string | WebixTemplate;
      textValue?: string;
      top?: number;
      type?: string;
      width?: number;
      zIndex?: number;
    }
    interface suggest extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      close(): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getBody(): any;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getHead(): any;
      getItemText(id: string): string;
      getList(): webix.ui.baseview;
      getMasterValue(): any;
      getNode(): any;
      getParentView(): any;
      getSuggestion(): string;
      getTopParentView(): webix.ui.baseview;
      getValue(): string | number;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      linkInput(input: HTMLElement): void;
      mapEvent(map: any): void;
      resize(): void;
      resizeChildren(): void;
      setMasterValue(value: any): void;
      setPosition(x: number, y: number): void;
      setValue(value: string | number): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: suggestConfig;
      name: string;
    }
    interface tabbarConfig {
      align?: string;
      animate?: any;
      attributes?: { [key: string]: any };
      borderless?: boolean;
      bottomLabel?: any;
      bottomOffset?: number;
      bottomPadding?: any;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string;
      inputHeight?: number;
      inputPadding?: number;
      inputWidth?: number;
      invalidMessage?: any;
      label?: string;
      labelPosition?: string;
      labelWidth?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      moreTemplate?: WebixCallback;
      multiview?: boolean;
      name?: string;
      on?: any;
      options?: any;
      placeholder?: string;
      popup?: any;
      popupTemplate?: WebixCallback;
      popupWidth?: number;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?: string | webix.ui.baseview;
      tabFocus?: boolean;
      tabMargin?: number;
      tabMinWidth?: number;
      tabMoreWidth?: number;
      tabOffset?: number;
      tabbarPopup?: webix.ui.baseview;
      template?: string | WebixCallback;
      tooltip?: string;
      topOffset?: number;
      type?: string;
      validate?: boolean;
      validateEvent?: string;
      value?: string;
      width?: number;
      yCount?: number;
    }
    interface tabbar extends webix.ui.baseview {
      addOption(id: string, value: any, show?: boolean, index?: number): void;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getPopup(): webix.ui.baseview;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      optionIndex(ID: string): number;
      refresh(): void;
      removeOption(id: string): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(obj: any, html: string, id: string): string;
      $renderLabel(config: any, id: string): string;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: tabbarConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface tabviewConfig {
      animate?: any;
      borderless?: boolean;
      cells?: any[];
      cols?: any[];
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      isolate?: boolean;
      margin?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      multiview?: any;
      on?: any;
      padding?: number;
      paddingX?: number;
      paddingY?: number;
      responsive?: string;
      rows?: any[];
      tabbar?: any;
      type?: string;
      visibleBatch?: string;
      width?: number;
    }
    interface tabview extends webix.ui.baseview {
      addView(view: any, index?: number): webix.ui.baseview;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getMultiview(): any;
      getNode(): any;
      getParentView(): any;
      getTabbar(): any;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: any): number;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      reconstruct(): void;
      removeView(id: string): void;
      resize(): void;
      resizeChildren(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: tabviewConfig;
      name: string;
    }
    interface templateConfig {
      animate?: any;
      autoheight?: any;
      borderless?: boolean;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      data?: string | any[];
      dataFeed?: string | WebixCallback;
      datatype?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: any;
      onClick?: { [key: string]: any };
      scroll?: boolean | string;
      scrollSpeed?: string;
      src?: string;
      template?: string | WebixCallback;
      type?: string;
      url?: string;
      width?: number;
    }
    interface template extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getScrollState(): any;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(url: string, type?: string, callback?: WebixCallback): PromisedData;
      mapEvent(map: any): void;
      parse(data: any, type: string): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      setContent(node: any): void;
      setHTML(html: string): void;
      setValues(obj: any, update?: boolean): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: templateConfig;
      name: string;
    }
    interface textConfig {
      align?: string;
      animate?: any;
      attributes?: { [key: string]: any };
      borderless?: boolean;
      bottomLabel?: any;
      bottomPadding?: any;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string;
      inputHeight?: number;
      inputPadding?: number;
      inputWidth?: number;
      invalidMessage?: any;
      label?: string;
      labelPosition?: string;
      labelWidth?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: any;
      placeholder?: string;
      popup?: any;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?: string | webix.ui.baseview;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      tooltip?: string;
      type?: string;
      validate?: boolean;
      validateEvent?: string;
      value?: string;
      width?: number;
    }
    interface text extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(obj: any, html: string, id: string): string;
      $renderLabel(config: any, id: string): string;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: textConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface textareaConfig {
      align?: string;
      animate?: any;
      attributes?: { [key: string]: any };
      borderless?: boolean;
      bottomLabel?: any;
      bottomPadding?: any;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string;
      inputHeight?: number;
      inputPadding?: number;
      inputWidth?: number;
      invalidMessage?: any;
      label?: string;
      labelPosition?: string;
      labelWidth?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: any;
      placeholder?: string;
      popup?: any;
      readonly?: boolean;
      relatedAction?: string;
      relatedView?: string;
      required?: boolean;
      suggest?: string | webix.ui.baseview;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      tooltip?: string;
      type?: string;
      validate?: boolean;
      validateEvent?: string;
      value?: string;
      width?: number;
    }
    interface textarea extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $render: WebixCallback;
      $renderIcon: WebixCallback;
      $renderInput(obj: any, html: string, id: string): string;
      $renderLabel(config: any, id: string): string;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: textareaConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface toggleConfig {
      align?: string;
      animate?: any;
      borderless?: boolean;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string;
      inputHeight?: number;
      inputWidth?: number;
      label?: string;
      labelPosition?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      name?: string;
      on?: any;
      placeholder?: string;
      popup?: any;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      tooltip?: string;
      type?: string;
      value?: string;
      width?: number;
    }
    interface toggle extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      toggle(): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: toggleConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface toolbarConfig {
      animate?: any;
      borderless?: boolean;
      cols?: any[];
      container?: HTMLElement;
      css?: string;
      data?: string | any[];
      dataFeed?: string | WebixCallback;
      datatype?: string;
      disabled?: boolean;
      elements?: any[];
      elementsConfig?: { [key: string]: any };
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      isolate?: boolean;
      margin?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: any;
      padding?: number;
      paddingX?: number;
      paddingY?: number;
      responsive?: string;
      rows?: any[];
      rules?: any;
      scroll?: boolean | string;
      scrollSpeed?: string;
      type?: string;
      url?: string;
      visibleBatch?: string;
      width?: number;
    }
    interface toolbar extends webix.ui.baseview {
      addView(view: any, index?: number): webix.ui.baseview;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clear(): void;
      clearValidation(): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      focus(item: string): void;
      getChildViews(): any[];
      getCleanValues(): any;
      getDirtyValues(): any;
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getScrollState(): any;
      getTopParentView(): webix.ui.baseview;
      getValues(details?: any): { [key: string]: any };
      hasEvent(name: string): boolean;
      hide(): void;
      index(obj: any): number;
      isDirty(): boolean;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(url: string, type?: string, callback?: WebixCallback): PromisedData;
      mapEvent(map: any): void;
      parse(data: any, type: string): void;
      reconstruct(): void;
      refresh(): void;
      removeView(id: string): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      resizeChildren(): void;
      scrollTo(x: number, y: number): void;
      setDirty(mark?: boolean): void;
      setValues(values: any, update?: boolean): void;
      show(force?: boolean, animation?: boolean): void;
      showBatch(name: string): void;
      unbind(): void;
      unblockEvent(): void;
      validate(): boolean;
      $getSize(): any[];
      $height: number;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: toolbarConfig;
      name: string;
    }
    interface tooltipConfig {
      animate?: any;
      borderless?: boolean;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      dx?: number;
      dy?: number;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      on?: any;
      template?: string | WebixCallback;
      width?: number;
    }
    interface tooltip extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      customize(obj: any): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: tooltipConfig;
      name: string;
      type: { [key: string]: any };
    }
    interface treeConfig {
      animate?: any;
      borderless?: boolean;
      click?: string | WebixCallback;
      clipboard?: boolean | string;
      container?: HTMLElement;
      css?: string;
      data?: string | any[];
      dataFeed?: string | WebixCallback;
      datathrottle?: number;
      datatype?: string;
      disabled?: boolean;
      drag?: boolean;
      dragscroll?: boolean | string;
      filterMode?: any;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multiselect?: any;
      navigation?: boolean;
      on?: any;
      onClick?: { [key: string]: any };
      onContext?: { [key: string]: any };
      onDblClick?: WebixCallback;
      onMouseMove?: WebixCallback;
      pager?: any;
      ready?: WebixCallback;
      removeMissed?: boolean;
      rules?: any;
      save?: string;
      scheme?: any;
      scroll?: boolean | string;
      scrollSpeed?: string;
      select?: boolean;
      template?: string | WebixCallback;
      templateCopy?: WebixCallback;
      threeState?: boolean;
      tooltip?: any;
      type?: any;
      url?: string;
      width?: number;
    }
    interface tree extends webix.ui.baseview {
      add(obj: any, index?: number, parentId?: string): string;
      addCss(id: string | number, css: string, silent?: boolean): void;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      checkAll(id?: string): void;
      checkItem(id: string): void;
      clearAll(): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      close(id: string): void;
      closeAll(): void;
      copy(
        sid: string,
        tindex: number,
        tobj?: webix.ui.baseview,
        details?: any,
      ): string;
      count(): number;
      customize(obj: any): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      exists(id: string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value: string,
        preserve: boolean,
      ): void;
      getBranchIndex(id: string, parent?: string): number;
      getChecked(): any[];
      getChildViews(): any[];
      getFirstChildId(id: string): string;
      getFirstId(): string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number): string;
      getIndexById(id: string): number;
      getItem(id: string): any;
      getItemNode(id: string): void;
      getLastId(): string;
      getNextId(id: string, step: number): string;
      getNextSiblingId(id: any): string;
      getNode(): any;
      getOpenItems(): any[];
      getParentId(id: string): string;
      getParentView(): any;
      getPrevId(id: string, step: number): string;
      getPrevSiblingId(id: any): string;
      getScrollState(): any;
      getSelectedId(as_array: boolean): string | any[];
      getSelectedItem(as_array?: boolean): any;
      getState(): any;
      getTopParentView(): webix.ui.baseview;
      group(config: any, mode: boolean): void;
      hasCss(id: string, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      isBranch(id: string): boolean;
      isBranchOpen(id: string): boolean;
      isChecked(id: string): boolean;
      isEnabled(): boolean;
      isSelected(id: string): boolean;
      isVisible(): boolean;
      load(url: string, type?: string, callback?: WebixCallback): PromisedData;
      loadBranch(id: string, callback: WebixCallback, url: string): void;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
      ): void;
      locate(e: Event): string;
      mapEvent(map: any): void;
      move(sid: string, tindex: number, tobj?: any, details?: any): string;
      moveSelection(direction: string): void;
      open(id: string): void;
      openAll(): void;
      parse(data: any, type: string): void;
      refresh(id?: string): void;
      remove(id: string): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      select(id: string | any[], preserve: boolean): void;
      selectAll(from?: string, to?: string): void;
      serialize(): any;
      setState(state: any): void;
      show(force?: boolean, animation?: boolean): void;
      showItem(id: string): void;
      sort(by: string, dir?: string, as?: string): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      uncheckAll(id?: string): void;
      uncheckItem(id: string): void;
      ungroup(mode: boolean): void;
      unselect(id?: string): void;
      unselectAll(): void;
      updateItem(id: string, data: any): void;
      validate(id?: string): boolean;
      $drag(source: HTMLElement, ev: Event): string;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: any, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event,
      ): void;
      $drop(source: HTMLElement, target: HTMLElement, ev: any): void;
      $dropAllow: WebixCallback;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: treeConfig;
      name: string;
      on_click: WebixCallback;
      on_context: { [key: string]: any };
      on_dblclick: WebixCallback;
      on_mouse_move: WebixCallback;
      type: { [key: string]: any };
      types: { [key: string]: any };
    }
    interface treetableConfig {
      animate?: any;
      autoConfig?: boolean;
      autoheight?: boolean;
      autowidth?: boolean;
      blockselect?: boolean;
      borderless?: boolean;
      checkboxRefresh?: boolean;
      clipboard?: boolean | string;
      columnWidth?: number;
      columns?: any[];
      container?: HTMLElement;
      css?: string;
      data?: string | any[];
      dataFeed?: string | WebixCallback;
      datafetch?: number;
      datathrottle?: number;
      datatype?: string;
      delimiter?: any;
      disabled?: boolean;
      drag?: boolean | string;
      dragColumn?: boolean | string;
      dragscroll?: boolean | string;
      editMath?: boolean;
      editValue?: string;
      editable?: boolean;
      editaction?: string;
      externalData?: WebixCallback;
      filterMode?: any;
      fixedRowHeight?: boolean;
      footer?: boolean;
      form?: string;
      gravity?: number;
      header?: boolean;
      headerRowHeight?: number;
      headermenu?: any;
      height?: number;
      hidden?: boolean;
      hover?: string;
      id?: string;
      leftSplit?: number;
      liveValidation?: boolean;
      loadahead?: number;
      math?: boolean;
      maxHeight?: number;
      maxWidth?: number;
      minColumnHeight?: number;
      minColumnWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multiselect?: boolean;
      navigation?: boolean;
      on?: any;
      onClick?: { [key: string]: any };
      onContext?: { [key: string]: any };
      onDblClick?: WebixCallback;
      onMouseMove?: WebixCallback;
      pager?: any;
      prerender?: boolean;
      ready?: WebixCallback;
      removeMissed?: boolean;
      resizeColumn?: boolean;
      resizeRow?: boolean;
      rightSplit?: number;
      rowHeight?: number;
      rowLineHeight?: number;
      rules?: any;
      save?: string;
      scheme?: any;
      scroll?: boolean;
      scrollAlignY?: boolean;
      scrollX?: boolean;
      scrollY?: boolean;
      select?: boolean | string;
      spans?: any[];
      threeState?: boolean;
      tooltip?: any;
      type?: any;
      url?: string;
      width?: number;
      yCount?: number;
    }
    interface treetable extends webix.ui.baseview {
      add(obj: any, index?: number, parentId?: string): string;
      addCellCss(id: string, name: string, css: string): void;
      addCss(id: string | number, css: string, silent?: boolean): void;
      addRowCss(id: string, css: string): void;
      adjust(): void;
      adjustColumn(id: string | number, header?: string): void;
      adjustRowHeight(columnId: string, silent: boolean): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      checkAll(id?: string): void;
      checkItem(id: string): void;
      clearAll(): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      close(id: string): void;
      closeAll(): void;
      collectValues(id: string): any[];
      columnId(index: number): string;
      copy(
        sid: string,
        tindex: number,
        tobj?: webix.ui.baseview,
        details?: any,
      ): string;
      count(): number;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      eachColumn(handler: WebixCallback, all?: boolean): void;
      eachRow(handler: WebixCallback, all?: boolean): void;
      edit(id: any): void;
      editCancel(): void;
      editCell(
        row: string,
        col: string,
        preserve?: boolean,
        show?: boolean,
      ): void;
      editColumn(id: string): void;
      editNext(): boolean;
      editRow(id: string): void;
      editStop(): void;
      enable(): void;
      exists(id: string): boolean;
      exportToExcel(url?: string): void;
      exportToPDF(url?: string): void;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value: string,
        preserve: boolean,
      ): void;
      filterByAll(): void;
      find(criterion: WebixCallback, first?: boolean): any;
      focusEditor(): void;
      getBranchIndex(id: string, parent?: string): number;
      getChecked(): any[];
      getChildViews(): any[];
      getColumnConfig(id: string): any;
      getColumnIndex(id: string): number;
      getEditState(): any;
      getEditor(row?: any, column?: string | number): any;
      getEditorValue(): string;
      getFilter(columnID: string): any;
      getFirstChildId(id: string): string;
      getFirstId(): string;
      getFormView(): webix.ui.baseview;
      getHeaderContent(id: string): { [key: string]: any };
      getHeaderNode(columnId: string, rowIndex?: number): HTMLElement;
      getIdByIndex(index: number): string;
      getIndexById(id: string): number;
      getItem(id: string): any;
      getItemNode(id: string): void;
      getLastId(): string;
      getNextId(id: string, step: number): string;
      getNextSiblingId(id: any): string;
      getNode(): any;
      getOpenItems(): any[];
      getPage(): number;
      getPager(): any;
      getParentId(id: string): string;
      getParentView(): any;
      getPrevId(id: string, step: number): string;
      getPrevSiblingId(id: any): string;
      getScrollState(): any;
      getSelectedId(asArray?: boolean, asString?: boolean): any;
      getSelectedItem(mode?: boolean): void;
      getState(): any;
      getText(rowid: string, colid: string): string;
      getTopParentView(): webix.ui.baseview;
      getVisibleCount(): number;
      group(config: any, mode: boolean): void;
      hasCss(id: string, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      hideColumn(id: string): void;
      hideOverlay(): void;
      isBranch(id: string): boolean;
      isBranchOpen(id: string): boolean;
      isChecked(id: string): boolean;
      isColumnVisible(id: string): boolean;
      isEnabled(): boolean;
      isVisible(): boolean;
      load(url: string, type?: string, callback?: WebixCallback): PromisedData;
      loadBranch(id: string, callback: WebixCallback, url: string): void;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
      ): void;
      locate(node: HTMLElement | Event): any;
      mapCells(
        startrow: number,
        startcol: string,
        numrows: number,
        numcols: number,
        callback: WebixCallback,
      ): void;
      mapEvent(map: any): void;
      markSorting(column_id: string, dir: string): void;
      move(
        sid: string,
        tindex: number,
        tobj?: webix.ui.baseview,
        details?: any,
      ): string;
      moveBottom(id: string): void;
      moveColumn(id: string, index: number): void;
      moveDown(id: string, step: number): void;
      moveSelection(direction: string): void;
      moveTop(id: string): void;
      moveUp(id: string, step: number): void;
      open(id: string): void;
      openAll(): void;
      parse(data: any, type: string): void;
      refresh(id?: string): void;
      refreshColumns(config?: any[]): void;
      refreshFilter(id: string): void;
      refreshHeaderContent(): void;
      registerFilter(node: HTMLElement, config: any, obj: any): void;
      remove(id: string): void;
      removeCellCss(id: string, name: string, css_name: string): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      removeRowCss(id: string, css_name: string): void;
      render(id: string, data: any, operation: string): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      serialize(): any;
      setColumnWidth(id: string, width: number): void;
      setPage(page: number): void;
      setRowHeight(id: string, height: number): void;
      setState(state: any): void;
      show(force?: boolean, animation?: boolean): void;
      showCell(row: string, column: string): void;
      showColumn(id: string): void;
      showColumnBatch(batch: string | number): void;
      showItem(id: string): void;
      showItemByIndex(index: number): void;
      showOverlay(message: string): void;
      sort(by: string, dir?: string, as?: string): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      uncheckAll(id?: string): void;
      uncheckItem(id: string): void;
      ungroup(mode: boolean): void;
      updateItem(id: string, data: any): void;
      validate(id?: string): boolean;
      validateEditor(id?: string): boolean;
      $drag(source: HTMLElement, ev: Event): string;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: any, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event,
      ): void;
      $drop(source: HTMLElement, target: HTMLElement, ev: any): void;
      $dropAllow: WebixCallback;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: treetableConfig;
      headerContent: any;
      name: string;
      on_click: WebixCallback;
      on_context: { [key: string]: any };
      on_dblclick: WebixCallback;
      on_mouse_move: WebixCallback;
      waitData: PromisedData;
    }
    interface unitlistConfig {
      animate?: any;
      autoheight?: boolean;
      autowidth?: boolean;
      borderless?: boolean;
      click?: string | WebixCallback;
      clipboard?: boolean | string;
      container?: HTMLElement;
      css?: string;
      data?: string | any[];
      dataFeed?: string | WebixCallback;
      datathrottle?: number;
      datatype?: string;
      disabled?: boolean;
      drag?: boolean | string;
      dragscroll?: boolean | string;
      externalData?: WebixCallback;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      layout?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      mouseEventDelay?: number;
      multiselect?: any;
      navigation?: boolean;
      on?: any;
      onClick?: { [key: string]: any };
      onContext?: { [key: string]: any };
      onDblClick?: WebixCallback;
      onMouseMove?: WebixCallback;
      pager?: any;
      ready?: WebixCallback;
      removeMissed?: boolean;
      rules?: any;
      save?: string;
      scheme?: any;
      scroll?: boolean | string;
      scrollSpeed?: string;
      select?: boolean | string;
      sort?: WebixCallback;
      template?: string | WebixCallback;
      templateCopy?: WebixCallback;
      tooltip?: any;
      type?: any;
      uniteBy?: WebixCallback;
      url?: string;
      width?: number;
      xCount?: number;
      yCount?: number;
    }
    interface unitlist extends webix.ui.baseview {
      add(obj: any, index?: number): string;
      addCss(id: string | number, css: string, silent?: boolean): void;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      clearAll(): void;
      clearCss(css: string, silent?: boolean): void;
      clearValidation(): void;
      copy(sid: string, tindex: number, tobj?: any, details?: any): void;
      count(): number;
      customize(obj: any): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      exists(id: string): boolean;
      filter(
        text: string | WebixTemplate | WebixCallback,
        value: string,
        preserve: boolean,
      ): void;
      getChildViews(): any[];
      getFirstId(): string;
      getFormView(): webix.ui.baseview;
      getIdByIndex(index: number): string;
      getIndexById(id: string): number;
      getItem(id: string): any;
      getItemNode(id: string): void;
      getLastId(): string;
      getNextId(id: string, step: number): string;
      getNode(): any;
      getPage(): number;
      getPager(): any;
      getParentView(): any;
      getPrevId(id: string, step: number): string;
      getScrollState(): any;
      getSelectedId(as_array: boolean): string | any[];
      getSelectedItem(as_array?: boolean): any;
      getTopParentView(): webix.ui.baseview;
      getUnitList(name: string): any[];
      getUnits(): any[];
      getVisibleCount(): number;
      hasCss(id: string, css: string): boolean;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isSelected(id: string): boolean;
      isVisible(): boolean;
      load(url: string, type?: string, callback?: WebixCallback): PromisedData;
      loadNext(
        count: number,
        start: number,
        callback: WebixCallback,
        url: string,
        now: boolean,
      ): void;
      locate(e: Event): string;
      mapEvent(map: any): void;
      move(sid: string, tindex: number, tobj?: any, details?: any): string;
      moveBottom(id: string): void;
      moveDown(id: string, step: number): void;
      moveSelection(direction: string): void;
      moveTop(id: string): void;
      moveUp(id: string, step: number): void;
      parse(data: any, type: string): void;
      refresh(id?: string): void;
      remove(id: string): void;
      removeCss(id: string | number, css: string, silent?: boolean): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      scrollTo(x: number, y: number): void;
      select(id: string | any[], preserve: boolean): void;
      selectAll(from?: string, to?: string): void;
      serialize(): any;
      setPage(page: number): void;
      show(force?: boolean, animation?: boolean): void;
      showItem(id: string): void;
      sort(by: string, dir?: string, as?: string): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      unselect(id?: string): void;
      unselectAll(): void;
      updateItem(id: string, data: any): void;
      validate(id?: string): boolean;
      $drag(source: HTMLElement, ev: Event): string;
      $dragHTML: WebixCallback;
      $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;
      $dragMark(context: any, ev: Event): boolean;
      $dragOut(
        source: HTMLElement,
        old_target: HTMLElement,
        new_target: HTMLElement,
        ev: Event,
      ): void;
      $drop(source: HTMLElement, target: HTMLElement, ev: any): void;
      $dropAllow: WebixCallback;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: unitlistConfig;
      name: string;
      on_click: WebixCallback;
      on_context: { [key: string]: any };
      on_dblclick: WebixCallback;
      on_mouse_move: WebixCallback;
      type: { [key: string]: any };
      types: { [key: string]: any };
    }
    interface uploaderConfig {
      align?: string;
      animate?: any;
      apiOnly?: boolean;
      autosend?: boolean;
      borderless?: boolean;
      click?: WebixCallback;
      container?: HTMLElement;
      content?: string | HTMLElement;
      css?: string;
      disabled?: boolean;
      formData?: { [key: string]: any };
      getValue(): string;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      hotkey?: string;
      id?: string;
      inputHeight?: number;
      inputWidth?: number;
      label?: string;
      labelPosition?: string;
      link?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      multiple?: boolean;
      name?: string;
      on?: any;
      placeholder?: string;
      popup?: any;
      tabFocus?: boolean;
      template?: string | WebixCallback;
      tooltip?: string;
      type?: string;
      value?: string;
      width?: number;
    }
    interface uploader extends webix.ui.baseview {
      addDropZone(element: HTMLElement): void;
      addFile(name: string, size: number, type?: string): void;
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      blur(): void;
      callEvent(name: string, params: any[]): boolean;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      fileDialog(content?: any): void;
      focus(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getInputNode(): HTMLElement;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      getValue(): string;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isUploaded(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      refresh(): void;
      render(id: string, data: any, type: string): void;
      resize(): void;
      send(id: number | string | WebixCallback, details: any): void;
      setValue(value: string): void;
      show(force?: boolean, animation?: boolean): void;
      stopUpload(id: string): void;
      sync(source: any, filter: WebixCallback, silent: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      $cssName: string;
      $getSize(): any[];
      $getValue(): string;
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $setValue(value: string): void;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: uploaderConfig;
      name: string;
      on_click: WebixCallback;
      touchable: any;
    }
    interface videoConfig {
      animate?: any;
      borderless?: boolean;
      container?: HTMLElement;
      controls?: boolean;
      css?: string;
      disabled?: boolean;
      gravity?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      src?: any;
      width?: number;
    }
    interface video extends webix.ui.baseview {
      adjust(): void;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      define(property: string, value: any): void;
      destructor(): void;
      disable(): void;
      enable(): void;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      getVideo(): void;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      resize(): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: videoConfig;
      name: string;
    }
    interface windowConfig {
      animate?: any;
      autofit?: boolean;
      autofocus?: boolean;
      body?: string | webix.ui.baseview;
      borderless?: boolean;
      container?: HTMLElement;
      css?: string;
      disabled?: boolean;
      fullscreen?: boolean;
      gravity?: number;
      head?: any;
      headHeight?: number;
      height?: number;
      hidden?: boolean;
      id?: string;
      left?: number;
      maxHeight?: number;
      maxWidth?: number;
      minHeight?: number;
      minWidth?: number;
      modal?: boolean;
      move?: boolean;
      on?: any;
      padding?: any;
      position?: string | WebixCallback;
      relative?: string;
      top?: number;
      width?: number;
      zIndex?: number;
    }
    interface window extends webix.ui.baseview {
      adjust(): void;
      attachEvent(type: string, functor: WebixCallback, id?: string): string;
      bind(target: any, rule?: WebixCallback, format?: string): void;
      blockEvent(): void;
      callEvent(name: string, params: any[]): boolean;
      close(): void;
      define(property: string, value: any): void;
      destructor(): void;
      detachEvent(id: string): void;
      disable(): void;
      enable(): void;
      getBody(): any;
      getChildViews(): any[];
      getFormView(): webix.ui.baseview;
      getHead(): any;
      getNode(): any;
      getParentView(): any;
      getTopParentView(): webix.ui.baseview;
      hasEvent(name: string): boolean;
      hide(): void;
      isEnabled(): boolean;
      isVisible(): boolean;
      mapEvent(map: any): void;
      resize(): void;
      resizeChildren(): void;
      setPosition(x: number, y: number): void;
      show(force?: boolean, animation?: boolean): void;
      unbind(): void;
      unblockEvent(): void;
      $getSize(): any[];
      $height: number;
      $scope: any;
      $setSize(x: number, y: number): boolean;
      $skin: any;
      $view: HTMLElement;
      $width: number;
      config: windowConfig;
      name: string;
    }
  }
}

declare function $$(id: string | Event | HTMLElement): webix.ui.baseview;
