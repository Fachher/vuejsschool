export default class ShipmentListModel {
    private _currentDate: Date;
    private _album: Album[];


    constructor(currentDate: Date, album: Album[]) {
        this._currentDate = currentDate;
        this._album = album;
    }


    set currentDate(value: Date) {
        this._currentDate = value;
    }


    get currentDate(): Date {
        return this._currentDate;
    }


    get album(): Album[] {
        return this._album;
    }

    set album(value: Album[]) {
        this._album = value;
    }
}