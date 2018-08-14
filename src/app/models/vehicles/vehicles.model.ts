export interface UserData {
  Codigo: string;
  Nombre: string;
}

export class VehiclesModel {
  public catalogTitle: string;
  public catalogIcon: string;

  public data: object = {};


  constructor() {
    this.catalogIcon = ' time_to_leave ';
    this.catalogTitle = 'Catalogo de Vehículos';

    this.initData();
  }
  public initData() {
    // object for displaying title and icon
    this.data['catalogName'] = {
      'title': this.catalogTitle,
      'icon': this.catalogIcon,
      'key': 'catalogName',
    };
    this.data['codigo'] = {
      'type': 'text',
      'title': 'Código',
      'key': 'codigo',
      'placeholder': 'Ingrese el codigo',
      'id': 'codigo'
    };

    this.data['Nombre'] = {
      'type': 'text',
      'title': 'Nombre',
      'key': 'nombre',
      'placeholder': 'ingrese nombre',
      'class': 'hidden',
      'id': 'nombre'
    };
  }

}


