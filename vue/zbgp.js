define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'gjp/zbgp/index' + location.search,
                    add_url: 'gjp/zbgp/add',
                    edit_url: 'gjp/zbgp/edit',
                    del_url: 'gjp/zbgp/del',
                    multi_url: 'gjp/zbgp/multi',
                    import_url: 'gjp/zbgp/import',
                    table: 'zbgp',
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
                        {field: 'qi', title: __('Qi'), operate: 'LIKE'},
                        {field: 'title', title: __('Title'), operate: 'LIKE'},
                        {field: 'guapai', title: __('Guapai'), operate: 'LIKE'},
                        {field: 'sizi', title: __('Sizi'), operate: 'LIKE'},
                        {field: 'huoshao', title: __('Huoshao'), operate: 'LIKE'},
                        {field: 'menshu', title: __('Menshu'), operate: 'LIKE'},
                        {field: 'liuxiao', title: __('Liuxiao'), operate: 'LIKE'},
                        {field: 'cimu', title: __('Cimu'), operate: 'LIKE'},
                        {field: 'pinyin', title: __('Pinyin'), operate: 'LIKE'},
                        {field: 'jieshi', title: __('Jieshi'), operate: 'LIKE'},
                        {field: 'chuzi', title: __('Chuzi'), operate: 'LIKE'},
                        {field: 'shili', title: __('Shili'), operate: 'LIKE'},
                        {field: 'yufa', title: __('Yufa'), operate: 'LIKE'},
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
