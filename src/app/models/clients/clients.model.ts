export interface UserData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export class ClientsModel {
  public catalogTitle: string;
  public catalogIcon: string;
  public endpoint;
  public data: object = {};


  constructor() {
    this.catalogIcon = 'group';
    this.catalogTitle = 'Catálogo de Clientes';
    this.endpoint = 'https://jsonplaceholder.typicode.com/todos';
    this.initData();
  }
  public initData() {

  // object for displaying title and icon
    this.data['catalogName'] = {
      'title': this.catalogTitle,
      'icon':  this.catalogIcon,
      'key': 'catalogName',
    };
    // We define the endpoint
    this.data['endpoint'] = {
      'url' : 'https://jsonplaceholder.typicode.com/todos'
    };


    this.data['userId'] = {
      'type': 'text',
      'title': 'userId',
      'key': 'userId',
      'placeholder': 'seleccione UserId',
    };
    this.data['id'] = {
      'type': 'text',
      'title': 'id',
      'key': 'id',
      'placeholder': 'Seleccione id',
    };
    this.data['title'] = {
      'type': 'text',
      'title': 'Titulo',
      'key': 'title',
      'placeholder': 'Seleccione id',
    };
    this.data['completed'] = {
      'type': 'text',
      'title': 'completado',
      'key': 'completed',
      'placeholder': 'Seleccione id',
    };
  }

  }


