import { AlertComponent } from "../alert.component";

export function openSnackBar(data:any, snackBar:any){
    snackBar.openFromComponent(AlertComponent, {
      duration:3000,
      data: data.msg,
      horizontalPosition: data.y,
      verticalPosition:data.x,
    });
  }