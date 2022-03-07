import { HttpClient, HttpHandler } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { from } from "rxjs";

import { CategoryPageComponent } from "./category-page.component";

describe('CategoryPageComponent', () => {
    let component: CategoryPageComponent;
    let fixture: ComponentFixture<CategoryPageComponent>;
    let activatedRoute: ActivatedRoute;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [CategoryPageComponent],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        params: from([{ category: 'movies' }]),
                        queryParams: from([{ layout: '2' }])
                    },
                },
            ]
        }).compileComponents();

        activatedRoute = TestBed.inject(ActivatedRoute);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CategoryPageComponent);
        component = fixture.componentInstance;
    });

    it('Layout Parameter is fetched', () => {
        activatedRoute.queryParams.subscribe(params => {
            expect(params['layout']).toEqual('2');
        });
    });

    it('Category Parameter is fetched', () => {
        activatedRoute.params.subscribe(params => {
            expect(params['category']).toEqual('movies');
        });
    });
});