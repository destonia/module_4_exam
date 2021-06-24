import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AwesomeService } from 'src/app/service/awesome.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  awesomeForm: FormGroup = new FormGroup({
    tag: new FormControl,
    url: new FormControl,
    descriptions: new FormControl,
  });
  id: any;

  constructor(private awesomeService: AwesomeService,
    private activatedRoute: ActivatedRoute) {

    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.getAwesome(this.id);

  }
  ngOnInit(): void {
  }
  getAwesome(id: number) {
    return this.awesomeService.findById(id).subscribe(awesome => {
      console.log(awesome);
      this.awesomeForm = new FormGroup({
        tag: new FormControl(awesome.tag),
        url: new FormControl(awesome.url),
        descriptions: new FormControl(awesome.descriptions),
      });
    });
  }

  updateAwesome(id: number) {
    const awesome = this.awesomeForm.value;
    this.awesomeService.updateAwesome(id, awesome).subscribe(() => {
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
  }

  deleteAwesome(id: number){
    const awesome = this.awesomeForm.value;
    this.awesomeService.deleteAwesome(id).subscribe(() => {
      alert('deleted');
    }, e => {
      console.log(e);
    });
  }
}
