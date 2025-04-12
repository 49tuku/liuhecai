define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'gjp/tuku6/index' + location.search,
                    add_url: 'gjp/tuku6/add',
                    edit_url: 'gjp/tuku6/edit',
                    del_url: 'gjp/tuku6/del',
                    multi_url: 'gjp/tuku6/multi',
                    import_url: 'gjp/tuku6/import',
                    table: 'tu_kaijiang6',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                fixedColumns: true,
                fixedRightNumber: 1,
                columns: [
                    [
                        {checkbox: true},
                        {field: 'lotteryType', title:'彩种', operate: 'LIKE', formatter: Table.api.formatter.label, searchList:lotteryJson},
                        {field: 'color', title: '颜色', searchList:{'1':'彩色','2':'黑白'}, formatter: Table.api.formatter.label},
                        {field: 'letter', title:'字母', operate: false},
                        {field: 'number', title: '期数', operate: false},
                        {field: 'pictureName', title: '名称', operate: 'LIKE'},
                        {field: 'pictureUrl', title:'图片', operate: 'LIKE', formatter: Table.api.formatter.url},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});
