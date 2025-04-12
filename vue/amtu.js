define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'gjp/amtu/index' + location.search,
                    add_url: 'gjp/amtu/add',
                    edit_url: 'gjp/amtu/edit',
                    del_url: 'gjp/amtu/del',
                    multi_url: 'gjp/amtu/multi',
                    import_url: 'gjp/amtu/import',
                    table: 'dg_amtu',
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
                        {field: 'lotteryType', title:'彩种', operate: 'LIKE', formatter: Table.api.formatter.label, searchList:lotteryJson},
                        {field: 'type', title: '位置', formatter: Table.api.formatter.normal, searchList:{'1':'解澳门新彩跑马图','2':'解新彩挂牌','3':'趣味看图','4':'解四不像','5':'解内幕传真','6':'解管家婆'}},
                        {field: 'qi', title: __('Qi'), operate: 'LIKE'},
                        {field: 'image', title: __('Image'), operate: false, events: Table.api.events.image, formatter: Table.api.formatter.image},
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
