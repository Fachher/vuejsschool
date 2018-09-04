export default class ShipmentListModel {
    private _currentDate: Date;


    constructor(currentDate: Date) {
        this._currentDate = currentDate;
    }


    set currentDate(value: Date) {
        this._currentDate = value;
    }


    get currentDate(): Date {
        return this._currentDate;
    }
}