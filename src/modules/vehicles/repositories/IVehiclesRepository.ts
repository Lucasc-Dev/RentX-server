import ICreateVehicleDTO from "../dtos/ICreateVehicleDTO";
import IListVehiclesDTO from "../dtos/IListVehiclesDTO";
import Feature from "../infra/typeorm/entities/Feature";
import Vehicle from "../infra/typeorm/entities/Vehicle";

export default interface IVehiclesRepository {
    delete(id: string): Promise<void>;
    save(vehicle: Vehicle): Promise<void>;
    create(data: ICreateVehicleDTO): Promise<Vehicle>;
    findById(id: string): Promise<Vehicle | undefined>;
    findVehicle(id: string): Promise<Vehicle | undefined>;
    findByPlate(plate: string): Promise<Vehicle | undefined>;
    listAvailableVehicles(data: IListVehiclesDTO): Promise<[Vehicle[], number]>;
    addFeaturesToVehicle(vehicle: Vehicle, features: Feature[]): Promise<Vehicle>;
}