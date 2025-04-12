define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'gjp/ezjj/index' + location.search,
                    add_url: 'gjp/ezjj/add',
                    edit_url: 'gjp/ezjj/edit',
                    del_url: 'gjp/ezjj/del',
                    multi_url: 'gjp/ezjj/multi',
                    import_url: 'gjp/ezjj/import',
                    table: 'dg_ezjj',
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
                        {field: 'qi', title: __('Qi'), operate: 'LIKE'},
                        {field: 'xiao', title: '肖', operate: 'LIKE'},
                        {field: 'ma', title: '码', operate: 'LIKE'},
                        {field: 'kai', title: __('Kai'), operate: 'LIKE'},
                        {field: 'status', title: '显示', formatter: Table.api.formatter.toggle},
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
