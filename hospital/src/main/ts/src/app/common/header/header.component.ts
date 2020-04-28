import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute, ActivationStart, Router } from "@angular/router";

@Component({
  selector: "header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  /*-------------------------------------------------------------------
   *                           ATRIBUTES
   *-------------------------------------------------------------------*/

  public title = "";

  public menus: any[] = [
    { title: "Dashboard", icon: "", router: "dashboard" },
    { title: "Médicos", icon: "", router: "medico" },
  ];

  /*-------------------------------------------------------------------
   *                           CONSTRUCTOR
   *-------------------------------------------------------------------*/
  constructor(
    public activatedRoute: ActivatedRoute,
    public detectionRef: ChangeDetectorRef,
    public router: Router
  ) {
    router.events.subscribe((e) => {
      if (e instanceof ActivationStart) {
        this.title = e.snapshot.data.title;
      }
    });
  }
  /*-------------------------------------------------------------------
   *                           BEHAVIORS
   *-------------------------------------------------------------------*/
  ngOnInit() {}

  /**
   *
   */
  ngOnDestroy() {}
}
