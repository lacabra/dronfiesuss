import { Polygon } from 'geojson';
import { Operation, OperationState, OperatonFaaRule } from "../entities/Operation";
import { OperationVolume } from '../entities/OperationVolume';


let op: Operation = new Operation()
op.flight_comments = "Test operation for rescue"
op.volumes_description = "Simple polygon"
op.flight_number = "12345678"
op.submit_time = "2019-12-11T19:59:10Z"
op.update_time = "2019-12-11T19:59:10Z"
op.faa_rule = OperatonFaaRule.PART_107;
op.state = OperationState.PROPOSED

op.operation_volumes = new Array < OperationVolume > ();
op.operation_volumes[0] = new OperationVolume()
op.operation_volumes[0].effective_time_begin = "2019-12-11T19:59:10Z"
op.operation_volumes[0].effective_time_end = "2019-12-11T20:59:10Z"
op.operation_volumes[0].min_altitude = 10
op.operation_volumes[0].max_altitude = 70
const polygon: Polygon = {
    type: "Polygon",
    coordinates: [
        [
            [-56.16361141204833, -34.90682134107926],
            [-56.163225173950195, -34.911255687582056],
            [-56.15453481674194, -34.91389506584019],
            [-56.15406274795532, -34.909020947652444],
            [-56.16361141204833, -34.90682134107926]
        ]
    ]
};
op.operation_volumes[0].operation_geography = polygon
op.operation_volumes[0].beyond_visual_line_of_sight = true

op.operation_volumes[1] = new OperationVolume()
op.operation_volumes[1].effective_time_begin = "2019-12-11T19:59:10Z"
op.operation_volumes[1].effective_time_end = "2019-12-11T20:59:10Z"
op.operation_volumes[1].min_altitude = 10
op.operation_volumes[1].max_altitude = 70
op.state = OperationState.PROPOSED //"PROPOSED"
const polygons: Polygon = {
    type: "Polygon",
    coordinates: [
        [
            [-56.16361141204833, -34.90682134107926],
            [-56.163225173950195, -34.911255687582056],
            [-56.15453481674194, -34.91389506584019],
            [-56.15406274795532, -34.909020947652444],
            [-56.16361141204833, -34.90682134107926]
        ]
    ]
};
op.operation_volumes[1].operation_geography = polygons
op.operation_volumes[1].beyond_visual_line_of_sight = true