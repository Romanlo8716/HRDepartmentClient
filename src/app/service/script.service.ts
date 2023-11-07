import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {
  loadScript(url: string, id: string, callback: () => void) {
    if (document.getElementById(id)) {
      callback();
      return;
    }
    const script = document.createElement('script');
    script.id = id;
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
  }
}