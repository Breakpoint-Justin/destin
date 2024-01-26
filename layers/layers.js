var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FiberBackbone_2 = new ol.format.GeoJSON();
var features_FiberBackbone_2 = format_FiberBackbone_2.readFeatures(json_FiberBackbone_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FiberBackbone_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FiberBackbone_2.addFeatures(features_FiberBackbone_2);
var lyr_FiberBackbone_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FiberBackbone_2, 
                style: style_FiberBackbone_2,
                interactive: true,
                title: '<img src="styles/legend/FiberBackbone_2.png" /> Fiber Backbone'
            });
var format_Fiber_3 = new ol.format.GeoJSON();
var features_Fiber_3 = format_Fiber_3.readFeatures(json_Fiber_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fiber_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fiber_3.addFeatures(features_Fiber_3);
var lyr_Fiber_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fiber_3, 
                style: style_Fiber_3,
                interactive: true,
                title: '<img src="styles/legend/Fiber_3.png" /> Fiber'
            });
var format_Fiber_4 = new ol.format.GeoJSON();
var features_Fiber_4 = format_Fiber_4.readFeatures(json_Fiber_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fiber_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fiber_4.addFeatures(features_Fiber_4);
var lyr_Fiber_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fiber_4, 
                style: style_Fiber_4,
                interactive: true,
                title: '<img src="styles/legend/Fiber_4.png" /> Fiber'
            });
var format_Flowerpot_5 = new ol.format.GeoJSON();
var features_Flowerpot_5 = format_Flowerpot_5.readFeatures(json_Flowerpot_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Flowerpot_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flowerpot_5.addFeatures(features_Flowerpot_5);
var lyr_Flowerpot_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Flowerpot_5, 
                style: style_Flowerpot_5,
                interactive: true,
                title: '<img src="styles/legend/Flowerpot_5.png" /> Flowerpot'
            });
var format_Handgole_6 = new ol.format.GeoJSON();
var features_Handgole_6 = format_Handgole_6.readFeatures(json_Handgole_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Handgole_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Handgole_6.addFeatures(features_Handgole_6);
var lyr_Handgole_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Handgole_6, 
                style: style_Handgole_6,
                interactive: true,
                title: '<img src="styles/legend/Handgole_6.png" /> Handgole'
            });
var format_FiberNode_7 = new ol.format.GeoJSON();
var features_FiberNode_7 = format_FiberNode_7.readFeatures(json_FiberNode_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FiberNode_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FiberNode_7.addFeatures(features_FiberNode_7);
var lyr_FiberNode_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FiberNode_7, 
                style: style_FiberNode_7,
                interactive: true,
                title: '<img src="styles/legend/FiberNode_7.png" /> Fiber Node'
            });
var format_PrimarySplitter_8 = new ol.format.GeoJSON();
var features_PrimarySplitter_8 = format_PrimarySplitter_8.readFeatures(json_PrimarySplitter_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrimarySplitter_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrimarySplitter_8.addFeatures(features_PrimarySplitter_8);
var lyr_PrimarySplitter_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrimarySplitter_8, 
                style: style_PrimarySplitter_8,
                interactive: true,
                title: '<img src="styles/legend/PrimarySplitter_8.png" /> Primary Splitter'
            });
var format_Boundary_9 = new ol.format.GeoJSON();
var features_Boundary_9 = format_Boundary_9.readFeatures(json_Boundary_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_9.addFeatures(features_Boundary_9);
var lyr_Boundary_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Boundary_9, 
                style: style_Boundary_9,
                interactive: true,
                title: '<img src="styles/legend/Boundary_9.png" /> Boundary'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_FiberBackbone_2.setVisible(true);lyr_Fiber_3.setVisible(true);lyr_Fiber_4.setVisible(true);lyr_Flowerpot_5.setVisible(true);lyr_Handgole_6.setVisible(true);lyr_FiberNode_7.setVisible(true);lyr_PrimarySplitter_8.setVisible(true);lyr_Boundary_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_FiberBackbone_2,lyr_Fiber_3,lyr_Fiber_4,lyr_Flowerpot_5,lyr_Handgole_6,lyr_FiberNode_7,lyr_PrimarySplitter_8,lyr_Boundary_9];
lyr_FiberBackbone_2.set('fieldAliases', {'v_layer': 'v_layer', 'v_layer_id': 'v_layer_id', 'v_project': 'v_project', 'v_project_': 'v_project_', 'v_plan': 'v_plan', 'v_plan_id': 'v_plan_id', 'v_created_': 'v_created_', 'v_last_edi': 'v_last_edi', 'v_create_1': 'v_create_1', 'v_parent_n': 'v_parent_n', 'v_status': 'v_status', 'ID': 'ID', 'Name': 'Name', 'Fiber Capa': 'Fiber Capa', 'Owner': 'Owner', 'Placement': 'Placement', 'Note': 'Note', 'Helix Fact': 'Helix Fact', 'Sag Factor': 'Sag Factor', 'Links': 'Links', 'Strands pe': 'Strands pe', 'Total Leng': 'Total Leng', 'Build': 'Build', 'Assigned': 'Assigned', 'Spare': 'Spare', 'Dead': 'Dead', 'Custom Cab': 'Custom Cab', 'mat_total_': 'mat_total_', 'lab_total_': 'lab_total_', 'mat_label': 'mat_label', 'mat_descri': 'mat_descri', 'mat_link': 'mat_link', 'mat_part_n': 'mat_part_n', 'mat_cost': 'mat_cost', 'mat_cost_m': 'mat_cost_m', 'mat_manufa': 'mat_manufa', 'mat_vendor': 'mat_vendor', 'lab_label': 'lab_label', 'lab_descri': 'lab_descri', 'lab_cost': 'lab_cost', 'lab_fixed_': 'lab_fixed_', 'lab_cost_m': 'lab_cost_m', 'vetro_id': 'vetro_id', });
lyr_Fiber_3.set('fieldAliases', {'v_layer': 'v_layer', 'v_layer_id': 'v_layer_id', 'v_project': 'v_project', 'v_project_': 'v_project_', 'v_plan': 'v_plan', 'v_plan_id': 'v_plan_id', 'v_created_': 'v_created_', 'v_last_edi': 'v_last_edi', 'v_create_1': 'v_create_1', 'v_parent_n': 'v_parent_n', 'v_status': 'v_status', 'ID': 'ID', 'Name': 'Name', 'Fiber Capa': 'Fiber Capa', 'Owner': 'Owner', 'Placement': 'Placement', 'Note': 'Note', 'Helix Fact': 'Helix Fact', 'Sag Factor': 'Sag Factor', 'Layer': 'Layer', 'Links': 'Links', 'Total Leng': 'Total Leng', 'Strands pe': 'Strands pe', 'Build': 'Build', 'Zone': 'Zone', 'Descriptio': 'Descriptio', 'Market': 'Market', 'Service Ar': 'Service Ar', 'Service Gr': 'Service Gr', 'Service Se': 'Service Se', 'Slack Loop': 'Slack Loop', 'Install Me': 'Install Me', 'Material L': 'Material L', 'Assigned': 'Assigned', 'Spare': 'Spare', 'Dead': 'Dead', 'Custom Cab': 'Custom Cab', 'mat_total_': 'mat_total_', 'lab_total_': 'lab_total_', 'mat_label': 'mat_label', 'mat_descri': 'mat_descri', 'mat_link': 'mat_link', 'mat_part_n': 'mat_part_n', 'mat_cost': 'mat_cost', 'mat_cost_m': 'mat_cost_m', 'mat_manufa': 'mat_manufa', 'mat_vendor': 'mat_vendor', 'lab_label': 'lab_label', 'lab_descri': 'lab_descri', 'lab_cost': 'lab_cost', 'lab_fixed_': 'lab_fixed_', 'lab_cost_m': 'lab_cost_m', 'vetro_id': 'vetro_id', });
lyr_Fiber_4.set('fieldAliases', {'v_layer': 'v_layer', 'v_layer_id': 'v_layer_id', 'v_project': 'v_project', 'v_project_': 'v_project_', 'v_plan': 'v_plan', 'v_plan_id': 'v_plan_id', 'v_created_': 'v_created_', 'v_last_edi': 'v_last_edi', 'v_create_1': 'v_create_1', 'v_parent_n': 'v_parent_n', 'v_status': 'v_status', 'ID': 'ID', 'Fiber Capa': 'Fiber Capa', 'Placement': 'Placement', 'Helix Fact': 'Helix Fact', 'Sag Factor': 'Sag Factor', 'Strands pe': 'Strands pe', 'Total Leng': 'Total Leng', 'Build': 'Build', 'Zone': 'Zone', 'Service Gr': 'Service Gr', 'Service Se': 'Service Se', 'Service Ar': 'Service Ar', 'Material L': 'Material L', 'Slack Loop': 'Slack Loop', 'Install Me': 'Install Me', 'Layer': 'Layer', 'Desc': 'Desc', 'Name': 'Name', 'Assigned': 'Assigned', 'Spare': 'Spare', 'Dead': 'Dead', 'Custom Cab': 'Custom Cab', 'mat_total_': 'mat_total_', 'lab_total_': 'lab_total_', 'mat_label': 'mat_label', 'mat_descri': 'mat_descri', 'mat_link': 'mat_link', 'mat_part_n': 'mat_part_n', 'mat_cost': 'mat_cost', 'mat_cost_m': 'mat_cost_m', 'mat_manufa': 'mat_manufa', 'mat_vendor': 'mat_vendor', 'lab_label': 'lab_label', 'lab_descri': 'lab_descri', 'lab_cost': 'lab_cost', 'lab_fixed_': 'lab_fixed_', 'lab_cost_m': 'lab_cost_m', 'vetro_id': 'vetro_id', });
lyr_Flowerpot_5.set('fieldAliases', {'v_layer': 'v_layer', 'v_layer_id': 'v_layer_id', 'v_project': 'v_project', 'v_project_': 'v_project_', 'v_plan': 'v_plan', 'v_plan_id': 'v_plan_id', 'v_created_': 'v_created_', 'v_last_edi': 'v_last_edi', 'v_create_1': 'v_create_1', 'v_parent_n': 'v_parent_n', 'v_status': 'v_status', 'ID': 'ID', 'Build': 'Build', 'Zone': 'Zone', 'Size': 'Size', 'Ground Rod': 'Ground Rod', 'Service Ar': 'Service Ar', 'Service Gr': 'Service Gr', 'Service Se': 'Service Se', 'mat_total_': 'mat_total_', 'lab_total_': 'lab_total_', 'mat_label': 'mat_label', 'mat_descri': 'mat_descri', 'mat_link': 'mat_link', 'mat_part_n': 'mat_part_n', 'mat_cost': 'mat_cost', 'mat_cost_m': 'mat_cost_m', 'mat_manufa': 'mat_manufa', 'mat_vendor': 'mat_vendor', 'lab_label': 'lab_label', 'lab_descri': 'lab_descri', 'lab_cost': 'lab_cost', 'lab_fixed_': 'lab_fixed_', 'lab_cost_m': 'lab_cost_m', 'vetro_id': 'vetro_id', });
lyr_Handgole_6.set('fieldAliases', {'v_layer': 'v_layer', 'v_layer_id': 'v_layer_id', 'v_project': 'v_project', 'v_project_': 'v_project_', 'v_plan': 'v_plan', 'v_plan_id': 'v_plan_id', 'v_created_': 'v_created_', 'v_last_edi': 'v_last_edi', 'v_create_1': 'v_create_1', 'v_parent_n': 'v_parent_n', 'v_status': 'v_status', 'ID': 'ID', 'Size': 'Size', 'Build': 'Build', 'Zone': 'Zone', 'Service Gr': 'Service Gr', 'Service Se': 'Service Se', 'Service Ar': 'Service Ar', 'Tier Ratin': 'Tier Ratin', '# of Prima': '# of Prima', '# of Secon': '# of Secon', '# of Livin': '# of Livin', 'Ground Rod': 'Ground Rod', '# of Fusio': '# of Fusio', 'Owner': 'Owner', 'Equipment': 'Equipment', 'Slack Loop': 'Slack Loop', 'Delete Dup': 'Delete Dup', 'Documentat': 'Documentat', 'mat_total_': 'mat_total_', 'lab_total_': 'lab_total_', 'mat_label': 'mat_label', 'mat_descri': 'mat_descri', 'mat_link': 'mat_link', 'mat_part_n': 'mat_part_n', 'mat_cost': 'mat_cost', 'mat_cost_m': 'mat_cost_m', 'mat_manufa': 'mat_manufa', 'mat_vendor': 'mat_vendor', 'lab_label': 'lab_label', 'lab_descri': 'lab_descri', 'lab_cost': 'lab_cost', 'lab_fixed_': 'lab_fixed_', 'lab_cost_m': 'lab_cost_m', 'vetro_id': 'vetro_id', });
lyr_FiberNode_7.set('fieldAliases', {'v_layer': 'v_layer', 'v_layer_id': 'v_layer_id', 'v_project': 'v_project', 'v_project_': 'v_project_', 'v_plan': 'v_plan', 'v_plan_id': 'v_plan_id', 'v_created_': 'v_created_', 'v_last_edi': 'v_last_edi', 'v_create_1': 'v_create_1', 'v_parent_n': 'v_parent_n', 'v_status': 'v_status', 'Location': 'Location', 'ID': 'ID', 'Name': 'Name', 'Note': 'Note', 'Build': 'Build', 'Links': 'Links', 'Site Civil': 'Site Civil', 'mat_total_': 'mat_total_', 'lab_total_': 'lab_total_', 'mat_label': 'mat_label', 'mat_descri': 'mat_descri', 'mat_link': 'mat_link', 'mat_part_n': 'mat_part_n', 'mat_cost': 'mat_cost', 'mat_cost_m': 'mat_cost_m', 'mat_manufa': 'mat_manufa', 'mat_vendor': 'mat_vendor', 'lab_label': 'lab_label', 'lab_descri': 'lab_descri', 'lab_cost': 'lab_cost', 'lab_fixed_': 'lab_fixed_', 'lab_cost_m': 'lab_cost_m', 'vetro_id': 'vetro_id', });
lyr_PrimarySplitter_8.set('fieldAliases', {'v_layer': 'v_layer', 'v_layer_id': 'v_layer_id', 'v_project': 'v_project', 'v_project_': 'v_project_', 'v_plan': 'v_plan', 'v_plan_id': 'v_plan_id', 'v_created_': 'v_created_', 'v_last_edi': 'v_last_edi', 'v_create_1': 'v_create_1', 'v_parent_n': 'v_parent_n', 'v_status': 'v_status', 'UID': 'UID', '# of Prima': '# of Prima', 'Splitter S': 'Splitter S', 'Zone': 'Zone', 'Service Gr': 'Service Gr', 'Service Se': 'Service Se', 'Market': 'Market', 'Layer': 'Layer', 'mat_total_': 'mat_total_', 'lab_total_': 'lab_total_', 'mat_label': 'mat_label', 'mat_descri': 'mat_descri', 'mat_link': 'mat_link', 'mat_part_n': 'mat_part_n', 'mat_cost': 'mat_cost', 'mat_cost_m': 'mat_cost_m', 'mat_manufa': 'mat_manufa', 'mat_vendor': 'mat_vendor', 'lab_label': 'lab_label', 'lab_descri': 'lab_descri', 'lab_cost': 'lab_cost', 'lab_fixed_': 'lab_fixed_', 'lab_cost_m': 'lab_cost_m', 'vetro_id': 'vetro_id', });
lyr_Boundary_9.set('fieldAliases', {'v_layer': 'v_layer', 'v_layer_id': 'v_layer_id', 'v_project': 'v_project', 'v_project_': 'v_project_', 'v_plan': 'v_plan', 'v_plan_id': 'v_plan_id', 'v_created_': 'v_created_', 'v_last_edi': 'v_last_edi', 'v_create_1': 'v_create_1', 'v_parent_n': 'v_parent_n', 'v_status': 'v_status', 'Name': 'Name', 'Z-Manager': 'Z-Manager', 'Note': 'Note', 'Estimated': 'Estimated', 'mat_total_': 'mat_total_', 'lab_total_': 'lab_total_', 'mat_label': 'mat_label', 'mat_descri': 'mat_descri', 'mat_link': 'mat_link', 'mat_part_n': 'mat_part_n', 'mat_cost': 'mat_cost', 'mat_cost_m': 'mat_cost_m', 'mat_manufa': 'mat_manufa', 'mat_vendor': 'mat_vendor', 'lab_label': 'lab_label', 'lab_descri': 'lab_descri', 'lab_cost': 'lab_cost', 'lab_fixed_': 'lab_fixed_', 'lab_cost_m': 'lab_cost_m', 'vetro_id': 'vetro_id', });
lyr_FiberBackbone_2.set('fieldImages', {'v_layer': '', 'v_layer_id': '', 'v_project': '', 'v_project_': '', 'v_plan': '', 'v_plan_id': '', 'v_created_': '', 'v_last_edi': '', 'v_create_1': '', 'v_parent_n': '', 'v_status': '', 'ID': '', 'Name': '', 'Fiber Capa': '', 'Owner': '', 'Placement': '', 'Note': '', 'Helix Fact': '', 'Sag Factor': '', 'Links': '', 'Strands pe': '', 'Total Leng': '', 'Build': '', 'Assigned': '', 'Spare': '', 'Dead': '', 'Custom Cab': '', 'mat_total_': '', 'lab_total_': '', 'mat_label': '', 'mat_descri': '', 'mat_link': '', 'mat_part_n': '', 'mat_cost': '', 'mat_cost_m': '', 'mat_manufa': '', 'mat_vendor': '', 'lab_label': '', 'lab_descri': '', 'lab_cost': '', 'lab_fixed_': '', 'lab_cost_m': '', 'vetro_id': '', });
lyr_Fiber_3.set('fieldImages', {'v_layer': '', 'v_layer_id': '', 'v_project': '', 'v_project_': '', 'v_plan': '', 'v_plan_id': '', 'v_created_': '', 'v_last_edi': '', 'v_create_1': '', 'v_parent_n': '', 'v_status': '', 'ID': '', 'Name': '', 'Fiber Capa': '', 'Owner': '', 'Placement': '', 'Note': '', 'Helix Fact': '', 'Sag Factor': '', 'Layer': '', 'Links': '', 'Total Leng': '', 'Strands pe': '', 'Build': '', 'Zone': '', 'Descriptio': '', 'Market': '', 'Service Ar': '', 'Service Gr': '', 'Service Se': '', 'Slack Loop': '', 'Install Me': '', 'Material L': '', 'Assigned': '', 'Spare': '', 'Dead': '', 'Custom Cab': '', 'mat_total_': '', 'lab_total_': '', 'mat_label': '', 'mat_descri': '', 'mat_link': '', 'mat_part_n': '', 'mat_cost': '', 'mat_cost_m': '', 'mat_manufa': '', 'mat_vendor': '', 'lab_label': '', 'lab_descri': '', 'lab_cost': '', 'lab_fixed_': '', 'lab_cost_m': '', 'vetro_id': '', });
lyr_Fiber_4.set('fieldImages', {'v_layer': '', 'v_layer_id': '', 'v_project': '', 'v_project_': '', 'v_plan': '', 'v_plan_id': '', 'v_created_': '', 'v_last_edi': '', 'v_create_1': '', 'v_parent_n': '', 'v_status': '', 'ID': '', 'Fiber Capa': '', 'Placement': '', 'Helix Fact': '', 'Sag Factor': '', 'Strands pe': '', 'Total Leng': '', 'Build': '', 'Zone': '', 'Service Gr': '', 'Service Se': '', 'Service Ar': '', 'Material L': '', 'Slack Loop': '', 'Install Me': '', 'Layer': '', 'Desc': '', 'Name': '', 'Assigned': '', 'Spare': '', 'Dead': '', 'Custom Cab': '', 'mat_total_': '', 'lab_total_': '', 'mat_label': '', 'mat_descri': '', 'mat_link': '', 'mat_part_n': '', 'mat_cost': '', 'mat_cost_m': '', 'mat_manufa': '', 'mat_vendor': '', 'lab_label': '', 'lab_descri': '', 'lab_cost': '', 'lab_fixed_': '', 'lab_cost_m': '', 'vetro_id': '', });
lyr_Flowerpot_5.set('fieldImages', {'v_layer': '', 'v_layer_id': '', 'v_project': '', 'v_project_': '', 'v_plan': '', 'v_plan_id': '', 'v_created_': '', 'v_last_edi': '', 'v_create_1': '', 'v_parent_n': '', 'v_status': '', 'ID': '', 'Build': '', 'Zone': '', 'Size': '', 'Ground Rod': '', 'Service Ar': '', 'Service Gr': '', 'Service Se': '', 'mat_total_': '', 'lab_total_': '', 'mat_label': '', 'mat_descri': '', 'mat_link': '', 'mat_part_n': '', 'mat_cost': '', 'mat_cost_m': '', 'mat_manufa': '', 'mat_vendor': '', 'lab_label': '', 'lab_descri': '', 'lab_cost': '', 'lab_fixed_': '', 'lab_cost_m': '', 'vetro_id': '', });
lyr_Handgole_6.set('fieldImages', {'v_layer': '', 'v_layer_id': '', 'v_project': '', 'v_project_': '', 'v_plan': '', 'v_plan_id': '', 'v_created_': '', 'v_last_edi': '', 'v_create_1': '', 'v_parent_n': '', 'v_status': '', 'ID': '', 'Size': '', 'Build': '', 'Zone': '', 'Service Gr': '', 'Service Se': '', 'Service Ar': '', 'Tier Ratin': '', '# of Prima': '', '# of Secon': '', '# of Livin': '', 'Ground Rod': '', '# of Fusio': '', 'Owner': '', 'Equipment': '', 'Slack Loop': '', 'Delete Dup': '', 'Documentat': '', 'mat_total_': '', 'lab_total_': '', 'mat_label': '', 'mat_descri': '', 'mat_link': '', 'mat_part_n': '', 'mat_cost': '', 'mat_cost_m': '', 'mat_manufa': '', 'mat_vendor': '', 'lab_label': '', 'lab_descri': '', 'lab_cost': '', 'lab_fixed_': '', 'lab_cost_m': '', 'vetro_id': '', });
lyr_FiberNode_7.set('fieldImages', {'v_layer': '', 'v_layer_id': '', 'v_project': '', 'v_project_': '', 'v_plan': '', 'v_plan_id': '', 'v_created_': '', 'v_last_edi': '', 'v_create_1': '', 'v_parent_n': '', 'v_status': '', 'Location': '', 'ID': '', 'Name': '', 'Note': '', 'Build': '', 'Links': '', 'Site Civil': '', 'mat_total_': '', 'lab_total_': '', 'mat_label': '', 'mat_descri': '', 'mat_link': '', 'mat_part_n': '', 'mat_cost': '', 'mat_cost_m': '', 'mat_manufa': '', 'mat_vendor': '', 'lab_label': '', 'lab_descri': '', 'lab_cost': '', 'lab_fixed_': '', 'lab_cost_m': '', 'vetro_id': '', });
lyr_PrimarySplitter_8.set('fieldImages', {'v_layer': '', 'v_layer_id': '', 'v_project': '', 'v_project_': '', 'v_plan': '', 'v_plan_id': '', 'v_created_': '', 'v_last_edi': '', 'v_create_1': '', 'v_parent_n': '', 'v_status': '', 'UID': '', '# of Prima': '', 'Splitter S': '', 'Zone': '', 'Service Gr': '', 'Service Se': '', 'Market': '', 'Layer': '', 'mat_total_': '', 'lab_total_': '', 'mat_label': '', 'mat_descri': '', 'mat_link': '', 'mat_part_n': '', 'mat_cost': '', 'mat_cost_m': '', 'mat_manufa': '', 'mat_vendor': '', 'lab_label': '', 'lab_descri': '', 'lab_cost': '', 'lab_fixed_': '', 'lab_cost_m': '', 'vetro_id': '', });
lyr_Boundary_9.set('fieldImages', {'v_layer': '', 'v_layer_id': '', 'v_project': '', 'v_project_': '', 'v_plan': '', 'v_plan_id': '', 'v_created_': '', 'v_last_edi': '', 'v_create_1': '', 'v_parent_n': '', 'v_status': '', 'Name': '', 'Z-Manager': '', 'Note': '', 'Estimated': '', 'mat_total_': '', 'lab_total_': '', 'mat_label': '', 'mat_descri': '', 'mat_link': '', 'mat_part_n': '', 'mat_cost': '', 'mat_cost_m': '', 'mat_manufa': '', 'mat_vendor': '', 'lab_label': '', 'lab_descri': '', 'lab_cost': '', 'lab_fixed_': '', 'lab_cost_m': '', 'vetro_id': '', });
lyr_FiberBackbone_2.set('fieldLabels', {'v_layer': 'no label', 'v_layer_id': 'no label', 'v_project': 'no label', 'v_project_': 'no label', 'v_plan': 'no label', 'v_plan_id': 'no label', 'v_created_': 'no label', 'v_last_edi': 'no label', 'v_create_1': 'no label', 'v_parent_n': 'no label', 'v_status': 'no label', 'ID': 'no label', 'Name': 'no label', 'Fiber Capa': 'no label', 'Owner': 'no label', 'Placement': 'no label', 'Note': 'no label', 'Helix Fact': 'no label', 'Sag Factor': 'no label', 'Links': 'no label', 'Strands pe': 'no label', 'Total Leng': 'no label', 'Build': 'no label', 'Assigned': 'no label', 'Spare': 'no label', 'Dead': 'no label', 'Custom Cab': 'no label', 'mat_total_': 'no label', 'lab_total_': 'no label', 'mat_label': 'no label', 'mat_descri': 'no label', 'mat_link': 'no label', 'mat_part_n': 'no label', 'mat_cost': 'no label', 'mat_cost_m': 'no label', 'mat_manufa': 'no label', 'mat_vendor': 'no label', 'lab_label': 'no label', 'lab_descri': 'no label', 'lab_cost': 'no label', 'lab_fixed_': 'no label', 'lab_cost_m': 'no label', 'vetro_id': 'no label', });
lyr_Fiber_3.set('fieldLabels', {'v_layer': 'no label', 'v_layer_id': 'no label', 'v_project': 'no label', 'v_project_': 'no label', 'v_plan': 'no label', 'v_plan_id': 'no label', 'v_created_': 'no label', 'v_last_edi': 'no label', 'v_create_1': 'no label', 'v_parent_n': 'no label', 'v_status': 'no label', 'ID': 'no label', 'Name': 'no label', 'Fiber Capa': 'no label', 'Owner': 'no label', 'Placement': 'no label', 'Note': 'no label', 'Helix Fact': 'no label', 'Sag Factor': 'no label', 'Layer': 'no label', 'Links': 'no label', 'Total Leng': 'no label', 'Strands pe': 'no label', 'Build': 'no label', 'Zone': 'no label', 'Descriptio': 'no label', 'Market': 'no label', 'Service Ar': 'no label', 'Service Gr': 'no label', 'Service Se': 'no label', 'Slack Loop': 'no label', 'Install Me': 'no label', 'Material L': 'no label', 'Assigned': 'no label', 'Spare': 'no label', 'Dead': 'no label', 'Custom Cab': 'no label', 'mat_total_': 'no label', 'lab_total_': 'no label', 'mat_label': 'no label', 'mat_descri': 'no label', 'mat_link': 'no label', 'mat_part_n': 'no label', 'mat_cost': 'no label', 'mat_cost_m': 'no label', 'mat_manufa': 'no label', 'mat_vendor': 'no label', 'lab_label': 'no label', 'lab_descri': 'no label', 'lab_cost': 'no label', 'lab_fixed_': 'no label', 'lab_cost_m': 'no label', 'vetro_id': 'no label', });
lyr_Fiber_4.set('fieldLabels', {'v_layer': 'no label', 'v_layer_id': 'no label', 'v_project': 'no label', 'v_project_': 'no label', 'v_plan': 'no label', 'v_plan_id': 'no label', 'v_created_': 'no label', 'v_last_edi': 'no label', 'v_create_1': 'no label', 'v_parent_n': 'no label', 'v_status': 'no label', 'ID': 'no label', 'Fiber Capa': 'no label', 'Placement': 'no label', 'Helix Fact': 'no label', 'Sag Factor': 'no label', 'Strands pe': 'no label', 'Total Leng': 'no label', 'Build': 'no label', 'Zone': 'no label', 'Service Gr': 'no label', 'Service Se': 'no label', 'Service Ar': 'no label', 'Material L': 'no label', 'Slack Loop': 'no label', 'Install Me': 'no label', 'Layer': 'no label', 'Desc': 'no label', 'Name': 'no label', 'Assigned': 'no label', 'Spare': 'no label', 'Dead': 'no label', 'Custom Cab': 'no label', 'mat_total_': 'no label', 'lab_total_': 'no label', 'mat_label': 'no label', 'mat_descri': 'no label', 'mat_link': 'no label', 'mat_part_n': 'no label', 'mat_cost': 'no label', 'mat_cost_m': 'no label', 'mat_manufa': 'no label', 'mat_vendor': 'no label', 'lab_label': 'no label', 'lab_descri': 'no label', 'lab_cost': 'no label', 'lab_fixed_': 'no label', 'lab_cost_m': 'no label', 'vetro_id': 'no label', });
lyr_Flowerpot_5.set('fieldLabels', {'v_layer': 'no label', 'v_layer_id': 'no label', 'v_project': 'no label', 'v_project_': 'no label', 'v_plan': 'no label', 'v_plan_id': 'no label', 'v_created_': 'no label', 'v_last_edi': 'no label', 'v_create_1': 'no label', 'v_parent_n': 'no label', 'v_status': 'no label', 'ID': 'no label', 'Build': 'no label', 'Zone': 'no label', 'Size': 'no label', 'Ground Rod': 'no label', 'Service Ar': 'no label', 'Service Gr': 'no label', 'Service Se': 'no label', 'mat_total_': 'no label', 'lab_total_': 'no label', 'mat_label': 'no label', 'mat_descri': 'no label', 'mat_link': 'no label', 'mat_part_n': 'no label', 'mat_cost': 'no label', 'mat_cost_m': 'no label', 'mat_manufa': 'no label', 'mat_vendor': 'no label', 'lab_label': 'no label', 'lab_descri': 'no label', 'lab_cost': 'no label', 'lab_fixed_': 'no label', 'lab_cost_m': 'no label', 'vetro_id': 'no label', });
lyr_Handgole_6.set('fieldLabels', {'v_layer': 'no label', 'v_layer_id': 'no label', 'v_project': 'no label', 'v_project_': 'no label', 'v_plan': 'no label', 'v_plan_id': 'no label', 'v_created_': 'no label', 'v_last_edi': 'no label', 'v_create_1': 'no label', 'v_parent_n': 'no label', 'v_status': 'no label', 'ID': 'no label', 'Size': 'no label', 'Build': 'no label', 'Zone': 'no label', 'Service Gr': 'no label', 'Service Se': 'no label', 'Service Ar': 'no label', 'Tier Ratin': 'no label', '# of Prima': 'no label', '# of Secon': 'no label', '# of Livin': 'no label', 'Ground Rod': 'no label', '# of Fusio': 'no label', 'Owner': 'no label', 'Equipment': 'no label', 'Slack Loop': 'no label', 'Delete Dup': 'no label', 'Documentat': 'no label', 'mat_total_': 'no label', 'lab_total_': 'no label', 'mat_label': 'no label', 'mat_descri': 'no label', 'mat_link': 'no label', 'mat_part_n': 'no label', 'mat_cost': 'no label', 'mat_cost_m': 'no label', 'mat_manufa': 'no label', 'mat_vendor': 'no label', 'lab_label': 'no label', 'lab_descri': 'no label', 'lab_cost': 'no label', 'lab_fixed_': 'no label', 'lab_cost_m': 'no label', 'vetro_id': 'no label', });
lyr_FiberNode_7.set('fieldLabels', {'v_layer': 'no label', 'v_layer_id': 'no label', 'v_project': 'no label', 'v_project_': 'no label', 'v_plan': 'no label', 'v_plan_id': 'no label', 'v_created_': 'no label', 'v_last_edi': 'no label', 'v_create_1': 'no label', 'v_parent_n': 'no label', 'v_status': 'no label', 'Location': 'no label', 'ID': 'no label', 'Name': 'no label', 'Note': 'no label', 'Build': 'no label', 'Links': 'no label', 'Site Civil': 'no label', 'mat_total_': 'no label', 'lab_total_': 'no label', 'mat_label': 'no label', 'mat_descri': 'no label', 'mat_link': 'no label', 'mat_part_n': 'no label', 'mat_cost': 'no label', 'mat_cost_m': 'no label', 'mat_manufa': 'no label', 'mat_vendor': 'no label', 'lab_label': 'no label', 'lab_descri': 'no label', 'lab_cost': 'no label', 'lab_fixed_': 'no label', 'lab_cost_m': 'no label', 'vetro_id': 'no label', });
lyr_PrimarySplitter_8.set('fieldLabels', {'v_layer': 'no label', 'v_layer_id': 'no label', 'v_project': 'no label', 'v_project_': 'no label', 'v_plan': 'no label', 'v_plan_id': 'no label', 'v_created_': 'no label', 'v_last_edi': 'no label', 'v_create_1': 'no label', 'v_parent_n': 'no label', 'v_status': 'no label', 'UID': 'no label', '# of Prima': 'no label', 'Splitter S': 'no label', 'Zone': 'no label', 'Service Gr': 'no label', 'Service Se': 'no label', 'Market': 'no label', 'Layer': 'no label', 'mat_total_': 'no label', 'lab_total_': 'no label', 'mat_label': 'no label', 'mat_descri': 'no label', 'mat_link': 'no label', 'mat_part_n': 'no label', 'mat_cost': 'no label', 'mat_cost_m': 'no label', 'mat_manufa': 'no label', 'mat_vendor': 'no label', 'lab_label': 'no label', 'lab_descri': 'no label', 'lab_cost': 'no label', 'lab_fixed_': 'no label', 'lab_cost_m': 'no label', 'vetro_id': 'no label', });
lyr_Boundary_9.set('fieldLabels', {'v_layer': 'no label', 'v_layer_id': 'no label', 'v_project': 'no label', 'v_project_': 'no label', 'v_plan': 'no label', 'v_plan_id': 'no label', 'v_created_': 'no label', 'v_last_edi': 'no label', 'v_create_1': 'no label', 'v_parent_n': 'no label', 'v_status': 'no label', 'Name': 'no label', 'Z-Manager': 'no label', 'Note': 'no label', 'Estimated': 'no label', 'mat_total_': 'no label', 'lab_total_': 'no label', 'mat_label': 'no label', 'mat_descri': 'no label', 'mat_link': 'no label', 'mat_part_n': 'no label', 'mat_cost': 'no label', 'mat_cost_m': 'no label', 'mat_manufa': 'no label', 'mat_vendor': 'no label', 'lab_label': 'no label', 'lab_descri': 'no label', 'lab_cost': 'no label', 'lab_fixed_': 'no label', 'lab_cost_m': 'no label', 'vetro_id': 'no label', });
lyr_Boundary_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});