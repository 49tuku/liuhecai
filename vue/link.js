define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'gjp/link/index' + location.search,
                    add_url: 'gjp/link/add',
                    edit_url: 'gjp/link/edit',
                    del_url: 'gjp/link/del',
                    multi_url: 'gjp/link/multi',
                    import_url: 'gjp/link/import',
                    table: 'dg_link',
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
                        {field: 'type', title: '位置', searchList:{'1':'链接1', '2':'担保链接', '3':'广告赞助商', '4':'高手榜', '5':'精华资料', '6':'各大型资料站', '7':'好平台', '8':'梦想区', '9':'一肖一码', '10':'更多链接'},formatter: Table.api.formatter.label},
                        {field: 'txt', title: __('Txt'), operate: 'LIKE'},
                        {field: 'url', title: __('Url'), operate: 'LIKE', formatter: Table.api.formatter.url},
                        {field: 'sort', title: __('Sort')},
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
