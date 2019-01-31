import { Activite } from "./Activite";

export class Pot{

  membres: string[];
  description: string[];
  activites: Activite[];
  value: number;
  isOpen: boolean;



  constructor(public name: string){
    this.membres = [];
    this.description = [];
    this.activites = [];
    this.value = 0;
    this.isOpen = true;
  }
}
