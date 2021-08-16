<template>
    <div>

        <LayoutNavigationBar :language="language" />

        <!-- Page Content -->
        <div class="container2" style="width: 100%;max-width: 100%;margin:0px;">

            <!-- Jumbotron Header -->
            <div class="container7">
                <header class="jumbotron my-4 testoCentrale" style="border:none;">
                    <div style="margin:auto;">
                        <div style="text-align:center;">
                            <h2>
                                <span v-if="language == 'it' ">Elezioni rappresentanti degli studenti</span>
                                <span v-if="language == 'en' ">Election of student representatives</span>
                            </h2>
                            <br />
                            <LayoutFrame v-for="item in organiConfronto"
                                         :key="item.id">
                                <div>
                                    <h4>{{item.name}}</h4>
                                    <p class="lead">
                                        <blockquote>
                                            {{item.desc}}
                                        </blockquote>
                                    </p>
                                </div>
                            </LayoutFrame>
                        </div>
                    </div>
                </header>
            </div>
            <!-- Page Features -->
            <div class="row text-center" id="listeContainer2" style="display:flex;flex-wrap:wrap;opacity:0.5;" v-on:load="test2">

                <LayoutFrame class-param="col-md-3"
                             v-for="item in liste"
                             :key="item.id"
                             style-param="max-width: 100%;flex: 1 4 25%;min-width:calc(150px + 9rem + 3vw)">
                    <a :href="'/' + language + item.linkLista">
                        <div class="card">
                            <div class="listTile" style="width: 100%;">
                                <div class="cap-left" style="width: 100%;display:block; padding: 0px;">
                                    <div style="width:100%;">
                                        <img class="imageList" :src="item.imageUrlHorizontal" style="width:100%;max-width:100%;">
                                    </div>
                                    <div style="padding-top:10px;">
                                        <div class="candidateTable" style="list-style:none;padding-left:0px;">
                                            <LayoutFrame v-for="item2 in item.organi"
                                                         :key="item2.name">
                                                <ListeFrameSenatoCdA :item="item2" />
                                            </LayoutFrame>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </LayoutFrame>
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->

        <LayoutFooter :language="language" />
    </div>
</template>

<script>
export default {
    props: {
        liste:{
            type:Array,
            default : null
        },
        organiConfronto:{
            type:Array,
            default : null
        },
        language:{
            type:String,
            default : 'it',
            required:true
        }
    },

    mounted() {
      this.$nextTick(() => {
        this.test2();
      });
    },
    methods: {
        test2(){
            for (var j=0; j < 5; j++)
            {
                var ul =  document.getElementById("listeContainer2");
                if (ul != null)
                {
                    for (var i = ul.children.length; i >= 0; i--) {
                        ul.appendChild(ul.children[Math.random() * i | 0]);
                    }

                    ul.style.opacity = '1';
                }
            }
        }
    }
}
</script>
