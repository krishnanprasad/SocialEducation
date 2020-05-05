import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-institution-card-a",
  templateUrl: "./institution-card-a.component.html",
  styleUrls: ["./institution-card-a.component.css"]
})
export class InstitutionCardAComponent implements OnInit {
  public Institution;
  public InstitutionType;
  @Input("dataInstitution") dataInstitution;
  @Input("dataType") dataInstitutionType;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.Institution = this.dataInstitution;
    this.InstitutionType = this.dataInstitutionType;
  }
  GoToInstitution() {
    this.router.navigate(['/Institution/Wall']);
  }
}
