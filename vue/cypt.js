define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'gjp/cypt/index' + location.search,
                    add_url: 'gjp/cypt/add',
                    edit_url: 'gjp/cypt/edit',
                    del_url: 'gjp/cypt/del',
                    multi_url: 'gjp/cypt/multi',
                    import_url: 'gjp/cypt/import',
                    table: 'cypt',
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
                        {field: 'wenzi', title: __('Wenzi'), operate: 'LIKE'},
                        {field: 'ciyu', title: __('Ciyu'), operate: 'LIKE'},
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
