import { Component } from '@angular/core';
import { CustomOnHoverDirective } from '../../directives/custom-on-hover.directive';
import { debounceTime, distinctUntilChanged, map, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CaptilizePipe } from '../../pipes/captlize.pipe';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CustomOnHoverDirective, CommonModule, RouterModule, CaptilizePipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
private searchData = new Subject<string>();
listItems:string[] = ['orange', 'apple', 'bananna', 'pomogranate'];
filteredItems:string[] = []
constructor(){
this.initlizSearchData()
}
initlizSearchData() {
  this.searchData.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  map((val:string)=>(
    this.listItems.filter((item)=>(
      item.toLowerCase().includes(val.toLowerCase())
    ))
  ))
  ).subscribe((data:string[])=>{
  this.filteredItems = data;
  })
}
onSearch(event: Event){
  const searchData = (event.target as HTMLInputElement).value;
  this.searchData.next(searchData);
}
groupData(){
  let outPut = {};
  let dataVal:any[] = [];
  // const data = dataVal.forEach((val)=>{
  //   if(outPut[val.category]){
  //     outPut[val.category].push(val.type)
  //   } else {
  //     outPut[val.category] = [val.type]
  //   }
  // });
  // const data = dataVal.reduce((acc,arr)=>{
  //   if(acc[arr.category]){
  //     acc[arr.category].push(arr.type)
  //   } else {
  //     acc[arr.category] = [arr.type]
  //   }
  // }, [])
//   for(let i = 0; i<=dataVal.length; i++){
// let data = dataVal[i]
// if(outPut[data.category]){
//   outPut[data.category].push(data.type)
// } else {
//   outPut[data.category]= [data.type]
// }
//   }


}
// flatenArray(a, flatten){
//   for(let i=0; i<=a.length; i++){
// if(Array.isArray(a[i])){
//   this.flatenArray(a[i], flatten)
// } else {
//   flatten.push(a[i])
// }
//   } {

//   }

// }

// removeDuplicates(arr:any){
// //   const uniquEle:any = [];
// //   for(let i=arr.length-1; i>=0; i++){
// // reversed +=arr[i]
// //   }

// // for(let i=0; i<=arr.length; i++){
// // if(uniquEle.indexOf(arr[i]=== -1)){
// //   uniquEle.push(arr[i]);
// // }
// // return uniquEle
// for(let key in outPut){
// result += outPut[key] + key
// }
// for(let i=0; i<=arr.length; i++){
// let val = arr[i]
// output[words]++
// output[words] = 1
// }
// if(acc[cur]){
//   acc[cur] = ++acc[cur]
// } else {
//   acc[cur] = 1

// }
// return acc
// }
// }
}
