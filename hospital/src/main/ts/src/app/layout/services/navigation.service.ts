import { Location } from "@angular/common";
import { EventEmitter, Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { BehaviorSubject, Observable } from "rxjs";

import {
    FooterOptions,
    NavigationOptions,
    ToolbarActionButton,
} from "../models/navigation";

@Injectable({
    providedIn: "root"
})
export class NavigationService {
    private navigationOptions: BehaviorSubject<
        NavigationOptions
    > = new BehaviorSubject({});
    private loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    private drawerEmitter: EventEmitter<any> = new EventEmitter();
    private scrollToEmitter: EventEmitter<{
        x?: number;
        y?: number;
        speed?: number;
    }> = new EventEmitter();
    private notificationDrawerEmitter: BehaviorSubject<
        any
    > = new BehaviorSubject(false);
    private subtitleSubject = new BehaviorSubject("");
    private showBackArrow = new BehaviorSubject(false);

    constructor(private titleService: Title, private location: Location) {}

    public setTitle(title: string) {
        this.titleService.setTitle(title);
    }

    public getTitle() {
        return this.titleService.getTitle();
    }

    public setSubtitle(subtitle: string) {
        this.subtitleSubject.next(subtitle);
    }

    public getSubtitle() {
        return this.subtitleSubject;
    }

    public togleShowArrowBack(show: boolean) {
        this.showBackArrow.next(show);
    }

    public getShowArrowBack() {
        return this.showBackArrow;
    }

    setNavigationOptions(opt: NavigationOptions) {
        this.navigationOptions.next(opt);
    }

    getNavigationOptions() {
        return this.navigationOptions;
    }

    navigationOptionsObservable() {
        return this.navigationOptions.subscribe(res => console.log(res));
    }

    public togleDrawer() {
        this.drawerEmitter.emit();
    }

    public togleNotificationDrawer() {
        this.notificationDrawerEmitter.next(true);
    }

    public getDrawerEmitter() {
        return this.drawerEmitter;
    }

    public getScrollToEmitter() {
        return this.scrollToEmitter;
    }

    public getNotificationDrawerEmitter() {
        return this.notificationDrawerEmitter;
    }

    public hideToolbar() {
        const newValue = this.navigationOptions.value;
        if (newValue.toolbar.showToolbar) {
            newValue.toolbar.showToolbar = false;
            this.navigationOptions.next(newValue);
        }
    }

    public showToolbar(
        bgColor: string = this.navigationOptions.value.toolbar.backgroundColor,
        tColor: string = this.navigationOptions.value.toolbar.color
    ) {
        const newValue = this.navigationOptions.value;
        if (!newValue.toolbar) newValue.toolbar = {};
        newValue.toolbar.showToolbar = true;
        newValue.toolbar.backgroundColor = bgColor;
        newValue.toolbar.color = tColor;
        this.navigationOptions.next(newValue);
    }

    public getLoading(): Observable<boolean> {
        return this.loading$.asObservable();
    }

    public showLoading() {
        this.loading$.next(true);
    }

    public hideLoading() {
        this.loading$.next(false);
    }

    public back() {
        this.location.back();
    }

    public toogleFooter(show) {
        const newValue = this.navigationOptions.value;
        if (!newValue.footer) newValue.footer = {};
        newValue.footer.showFooter = show;
        this.navigationOptions.next(newValue);
    }

    public setRightButton(options: ToolbarActionButton) {
        const newValue = this.navigationOptions.value;
        if (!newValue.toolbar) newValue.toolbar = {};
        newValue.toolbar.rightButton = options;
        this.navigationOptions.next(newValue);
    }

    public changeFooterType(footer: FooterOptions) {
        const newValue = this.navigationOptions.value;
        newValue.footer = footer;
        this.navigationOptions.next(newValue);
    }

    public scrollTo(x = 0, y?, speed?) {
        this.scrollToEmitter.emit({ x, y, speed });
    }
}
