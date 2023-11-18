$(function () {
    // 滑过用户id显示下拉列表
    $(".userid").hover(function () {
        $(".userHide").slideDown(500)
    }, function () {
        $(".userHide").hide()
    })
    // 购物车列表删除按钮滑过效果
    $(".car_list").on("mouseover", ".delBtn", function () {
        $(this).css("background-color", "#ff6700").html("&#xee24;")
    })
    $(".car_list").on("mouseout", ".delBtn", function () {
        $(this).css("background-color", "#fff").html("&#xe603;")

    })
})

// 购物车数据
$(function () {
    // 初始化数据
    getList()
    // 渲染数据的方法
    function getList() {
        $.ajax({
            url: 'http://www.yjyan.cn/mi/carslistApi.php',
            type: 'get',
            dataType: 'json',
            async: false,
            success: function (data) {
                console.log(data);
                data.forEach(obj => {
                    var chkBox = obj.isSelected == 1 ? "checked" : '';
                    var htmlTag = `
                    <li class="car_item">
                <div><input type="checkbox" class="inp" ${chkBox} value = "${obj.cid}"/></div>
                <div class="proInfo">
                    <a href="#"><img src="${obj.thumb}" alt=""></a>
                    <a href="#">${obj.cname} ${obj.attr}</a>
                </div>
                <div class="price">${obj.price}元</div>
                <div class="btns">
                    <button class="descBtn">-</button>
                    <input type="text" value="${obj.cnt}">
                    <button class="addBtn">+</button>
                </div>
                <div class="smallTotal">${obj.price * obj.cnt}元</div>
                <div><i class="delBtn iconfont">&#xe603;</i></div>
            </li>`
                    $(".car_list").append($(htmlTag))
                });
            },
            error: function () {
                alert('请求错误')
            }
        })
        // 已选数量
        total()
    }
    // 全选
    $("#selAll").click(function () {
        // 获取全选框的状态
        var selStatus = $(this).prop("checked") ? 1 : 0;
        // 1. 修改每个商品的选中状态
        $(".inp").each(function () {
            $(this).prop("checked", $("#selAll").prop("checked"))
            let _this = $(this)
            // let state = $(this).prop("checked")
            $.ajax({
                url: 'http://www.yjyan.cn/mi/editstatusApi.php',
                type: 'get',
                data: { cid: _this.val(), status: selStatus },
                dataType: 'json',
                success: function (data) {
                    // console.log(data.errno);
                },
                error: function () {
                    console.log('服务器请求错误')
                }
            })
        })
        // 2. 已选商品数量和总价
        total()
    })
    // 单选
    $(".car_list").on("click", ".inp", function () {
        var carid = $(this).val()
        var state = $(this).prop("checked") ? 1 : 0;
        // 发送ajax请求，修改数据库中状态
        $.ajax({
            url: 'http://www.yjyan.cn/mi/editstatusApi.php',
            type: 'get',
            data: { cid: carid, status: state },
            dataType: 'json',
            success: function (data) {
                if (data.errno == 200) {
                    // 修改已选数量和总价
                    total()
                }
            },
            error: function () {
                console.log('服务器请求错误')
            }
        })
    })
    // 数量加1
    $(".car_list").on("click", ".addBtn", function () {
        // a. 获取输入框中的数量
        var n = parseInt($(this).prev("input").val())
        n++
        //    b. 获取当前商品的cid
        var carid = $(this).parents(".car_item").find(".inp").val()
        var _this = $(this)
        // c.发送ajax请求，修改服务器中数据
        $.ajax({
            url: 'http://www.yjyan.cn/mi/editNumApi.php',
            type: 'get',
            dataType: 'json',
            data: { num: n, cid: carid },
            success: function (data) {
                if (data.errno == 200) {
                    _this.prev("input").val(n)  // 更新页面中的数量
                    // 修改小计金额
                    var price = _this.parents(".car_item").find(".price").html()
                    price = parseFloat(price.substr(0, price.length - 1))
                    _this.parents(".car_item").find(".smallTotal").html(price * n + "元")
                    // 修改总价
                    total()
                }
            },
            error: function () {
                console.log("服务器请求错误");
            }
        })
    })
    // 数量减1
    $(".car_list").on("click", ".descBtn", function () {
        // a. 获取输入框中的数量
        var n = parseInt($(this).next("input").val())
        n--
        if (n <= 0) { n = 1 }
        console.log(n);
        //    b. 获取当前商品的cid
        var carid = $(this).parents(".car_item").find(".inp").val()
        var _this = $(this)
        // c.发送ajax请求，修改服务器中数据
        $.ajax({
            url: 'http://www.yjyan.cn/mi/editNumApi.php',
            type: 'get',
            dataType: 'json',
            data: { num: n, cid: carid },
            success: function (data) {
                if (data.errno == 200) {
                    _this.next("input").val(n)  // 更新页面中的数量
                    // 修改小计金额
                    var price = _this.parents(".car_item").find(".price").html()
                    price = parseFloat(price.substr(0, price.length - 1))
                    _this.parents(".car_item").find(".smallTotal").html(price * n + "元")
                    // 修改总价
                    total()
                }
            },
            error: function () {
                console.log("服务器请求错误");
            }
        })
    })
    // 删除购物车数据
    $(".car_list").on("click", ".delBtn", function () {
        // 1. 获取删除商品的id
        var pid = $(this).parents(".car_item").find(".inp").val()
        var _this = $(this)
        $.ajax({
            url: 'http://www.yjyan.cn/mi/delApi.php',
            type: 'get',
            data: { cid: pid },
            dataType: 'json',
            success: function (data) {
                if (data.errno == 200) {
                    _this.parents(".car_item").slideUp(function () {
                        $(this).remove()
                        // 修改总价和已选数量
                        total()
                    })
                }
            },
            error: function () {
                alert("请求失败")
            }
        })
    })
    // 计算已选商品商品数量和总价
    function total() {
        let sum = 0 // 已选数量
        let totalMoney = 0
        $(".inp").each(function () {
            if ($(this).prop("checked")) {
                sum++
                var money = $(this).parents(".car_item").find(".smallTotal").html()
                money = parseFloat(money.substr(0, money.length - 1))
                totalMoney += money
            }
        })
        $("#cnt").html(sum)  // 设置已选数量
        $(".totalPrice span").html(totalMoney.toFixed(2))  // 设置总价格
        // 设置全选框的状态
        if (sum == $(".inp").length) {
            $("#selAll").prop("checked", true)
        } else {
            $("#selAll").prop("checked", false)
        }
    }
})