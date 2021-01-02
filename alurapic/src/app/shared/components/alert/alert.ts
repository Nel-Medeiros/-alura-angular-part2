export class Alert {

    constructor(
        public readonly alertType: AlertType,
        public readonly message: string
    ) { }

}

export enum AlertType {
    SUCCESS,
    WARNING,
    DANGER,
    INFO
}

//ex: const alert = new Alert(AlertType.SUCCESS, 'Operação realizada com sucesso');