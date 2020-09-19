<template>
  <div class="special">
    <el-container>
      <el-header height="70px">
        <Nav></Nav>
      </el-header>
      <el-main>
        <ul class="ul2">
          <special-item v-for="(special, id) in searchSpecial" :key="id" :special="special"></special-item>
        </ul>
        <el-pagination
          style="text-align: center;margin-top: 30px;margin-bottom: 20px"
          background
          :page-size="12"
          :current-page="pageIndex"
          layout="pager"
          :total="total"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </el-main>
      <el-footer height="140px">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
    import Nav from "../components/Nav";
    import SpecialItem from "../components/Special/SpecialItem";
    import Footer from "../components/Footer";
    import {reqSearchSpecial} from "../api";

    export default {
        name: "Special",
        components: {
            Nav,
            SpecialItem,
            Footer
        },
        data() {
            return {
                searchSpecial: [],
                total: 0,
                pageIndex: 1
            }
        },
        methods: {
            getData() {
                const sort = "id";
                const searchParam = {}
                searchParam.sort = "id"
                searchParam.pageNum = this.pageIndex
                reqSearchSpecial(searchParam).then((res) => {
                    console.log("res", res)
                    this.searchSpecial = res.data.foodSpecialModels;
                    this.total = res.data.total
                    console.log("res", this.searchSpecial)

                })
            },
            handleCurrentChange(c) {
                console.log("page", c)
                this.pageIndex = c
                this.getData()
            }
        },
        created() {
            this.getData()
        }

    }
</script>

<style scoped>
  .special {
    padding-top: 40px;
    width: 1000px;
    margin: 0 auto;
  }

  .el-header {
    padding: 0;
    line-height: 70px;
  }

  .el-footer {
    padding: 0;
    padding-top: 20px;
  }

  .el-main {
    margin-top: 20px;
    padding: 0;
    overflow-x: hidden;
    border-bottom: 1px solid #e8e8e8;
  }

  .ul2 {
    width: 104%;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
  }

  .list-group-item {
    padding: 0;
    margin-right: 2.8%;
    width: 30%;
    height: 250px;
  }
</style>
