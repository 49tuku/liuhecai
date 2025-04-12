define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'gjp/tukulist/index' + location.search,
                    add_url: 'gjp/tukulist/add',
                    edit_url: 'gjp/tukulist/edit',
                    del_url: 'gjp/tukulist/del',
                    multi_url: 'gjp/tukulist/multi',
                    import_url: 'gjp/tukulist/import',
                    table: 'tu_kaijianglist',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'tt.lotteryType', title:'彩种', operate: 'LIKE', formatter: Table.api.formatter.label, searchList:lotteryJson},
                        {field: 'tt.pictureName', title: __('Tu_id'), operate:'LIKE'},
                        {field: 'qishu', title: __('Qishu')},
                        {field: 'image', title: __('Image'), operate: false, events: Table.api.events.image, formatter: Table.api.formatter.image},
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
