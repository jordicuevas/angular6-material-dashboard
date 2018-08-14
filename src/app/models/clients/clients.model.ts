export interface UserData {
  Notificaciones: string;
  name: string;
  progress: string;
  color: string;
}

export class ClientsModel {
  public catalogTitle: string;
  public catalogIcon: string;

  public data: object = {};


  constructor() {
    this.catalogIcon = 'group';
    this.catalogTitle = 'Catálogo de Clientes';
    this.initData();
  }
  public initData() {

  // object for displaying title and icon
    this.data['catalogName'] = {
      'title': this.catalogTitle,
      'icon':  this.catalogIcon,
      'key': 'catalogName',
    };


    this.data['notificacion'] = {
      'type': 'select',
      'title': 'Tipo de notificación',
      'key': 'notificacion',
      'placeholder': 'Seleccione tipo de notificación',
      'source': [
        'Ninguno', 'Email', 'Móvil'
      ]
    };

    this.data['topico'] = {
      'type': 'select',
      'title': 'Topico',
      'key': 'topico',
      'placeholder': 'Seleccione topico',
      'class': 'hiden',
      'id': 'topico'
    }

    this.data['asunto'] = {
      'type': 'text',
      'title': 'Asunto',
      'key': 'asunto',
      'placeholder': 'Ingrese asunto',
      'class': 'hiden',
      'id': 'asunto'
    };

    this.data['mensaje'] = {
      'type': 'textarea',
      'title': 'Mensaje',
      'key': 'mensaje',
      'placeholder': 'Ingrese mensaje',
      'class': 'hiden',
      'id': 'mensaje'
    };

    this.data['plataforma'] = {
      'type': 'select',
      'title': 'Plataforma',
      'key': 'plataforma',
      'placeholder': 'Seleccione una plataforma',
      'source': [
        'Android', 'Ios'
      ],
      'class': 'hiden',
      'id': 'plataforma'
    };

    this.data['SMS'] = {
      'type': 'textarea',
      'title': 'SMS',
      'key': 'mensajeMovil',
      'placeholder': 'Ingrese mensaje',
      'class': 'hiden',
      'id': 'SMS'
    };
  }

  }


