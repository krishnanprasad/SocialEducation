import { Component, OnInit, Input } from '@angular/core';
import { EditProfileComponent } from '../../EditProfile/edit-profile.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() Edit;
  public Editable;
  status: boolean ;
  public projectlist = [
    {
      Name: 'Analysis of fluctuations in Semiconductor Devices ',
      // tslint:disable-next-line:max-line-length
      Description: 'The random nature of ion implantation and diffusion processes as well as inevitable tolerances in fabrication result in random fluctuations of doping concentrations and oxide thickness in semiconductor devices. These fluctuations are especially pronounced in ultrasmall (nanoscale) semiconductor devices when the spatial scale of doping and oxide thickness variations become comparable with the geometric dimensions of devicesThe technique is based on linearization of the transport equations with respect to the fluctuating quantities. It is computationally much (a few orders of magnitude) more efficient than the traditional Monte-Carlo approach and it yields information on the sensitivity of fluctuations of parameters of interest (e.g. threshold voltage, small-signal parameters, cut-off frequencies, etc.) to the locations of doping and oxide thickness fluctuations. For this reason, it can be very instrumental in the design of fluctuation-resistant structures of semiconductor devices.The technique is based on linearization of the transport equations with respect to the fluctuating quantities. It is computationally much (a few orders of magnitude) more efficient than the traditional Monte-Carlo approach and it yields information on the sensitivity of fluctuations of parameters of interest (e.g. threshold voltage, small-signal parameters, cut-off frequencies, etc.) to the locations of doping and oxide thickness fluctuations. For this reason, it can be very instrumental in the design of fluctuation-resistant structures of semiconductor devices.',
      With: 'Andrei, Petru',
      Timeline: 'March 2014',
    },
    {
      Name: 'Analysis of Breakdown Voltages and Depletion Region Width of 4H-SiC Vertical Double Implanted MOSFET (ECE/EEE Project)',
      // tslint:disable-next-line:max-line-length
      Description: 'The semiconductor based electronic devices that can function at ambient temperatures higher than 1500C without external cooling system could greatly benefit a variety of application. When Silicon Power device work at a temperature above 2000C then it is problematic because of the self heating is increased, also the internal junction temperature and leakage increased. To work in high temperature with ease it is required to used high band gap devices. For all of these requirements Silicon devices are the optimum choices.Due to various properties of Silicon carbide like lower intrinsic carrier concentration (10–35 orders of magnitude), higher electric breakdown field (4–20 times), higher thermal conductivity (3–13 times), larger saturated electron drift velocity (2–2.5 times) it replaces Si material very quickly in the semiconductor industry.',
      With: 'Ashish Kumar Sahu',
      Timeline: 'January 2015'
    }
  ];

  constructor() {}

  ngOnInit() {
    this.Editable = this.Edit;
    this.status = false;
    console.log('project list' + this.projectlist);
  }

  // ToggleReadLess(i) {
  //   console.log('Index' + i);
  //   this.status = !this.status;
  //   console.log('project list Status' + this.status);
  // }
}
