<template>
    <div>
        <LayoutNavigationBar :language="language" />

        <br />
        <br />

        <div class="intro white" style="text-align: center;">
            <div style="width:100%;">
                <img :src="dataLista.imageUrl" style="width:calc(15px + 4vw + 5rem); padding:2px;text-align:center;">
            </div>
            <div class="container2 wow animated fadeInUp">
                <h2 style="color:black; font-size:calc(7px + 2.5vw + 0.4rem); padding:0.2rem;">{{this.dataLista.name}}</h2>
<p>{{this.dataLista.desc}}</p>
        

                
            </div><!-- /.container -->
        </div><!-- /.intro -->

		


		<div style="padding:0.8rem;"></div>

        <div class="section" id="our-info">


			<LayoutFrame   v-for="item in dataLista.fasce"        :key="item.id">


				<div class="container2" style="max-width: 100%;margin:auto; width:100%;">
			
					<hr />

					<div style="padding:5px;"></div>
					<p  class="container2">
						{{item.text}} 
						</p>
					<div class="row container4">
						<LayoutFrame class-param="col-sm-3 wow animated fadeInLeft"
									v-for="item2 in item.pc"
									:key="item2.id"
									style-param="min-width:calc(150px + 6rem + 2vw);display:flex;flex: 1 1 25%;padding:5px;max-width: 100%;">
							<a :href="item2.link" 
							style="text-decoration: none;color:black;border:1px solid #0000003c;padding: calc(1px + 0.2rem);margin: 0px; border-radius:calc(10px + 1rem);width: 100%;">
							<div >
						 
								<div style="padding-top:3px;text-align:center;">
									<h4>{{item2.text}}</h4>
								</div>
								<div class="function-text" style="text-align:left;padding:calc(0.5vw); margin-bottom:0.2rem;">
									<div style="padding-left:calc(1rem + 3.3vw);padding-right:calc(1rem + 3.3vw);text-align:center;">
										<img style="width:100%;max-width:calc(10rem + 10px + 5vw);" :src="item2.imgurl">
									</div>
									<div style="padding-left:1rem;">
										<ul>

											<li 			v-for="item3 in item2.car"		:key="item3.id">
												{{item3}}
											</li>

										</ul>
									</div>
								</div>
							</div>
							</a>
						</LayoutFrame>
					</div>
				</div>
		    </LayoutFrame>
        </div><!-- our-info -->


        


        <div style="padding:1.6rem;"></div>
        <LayoutHorizontalLine />
        <div style="padding:1.7rem;"></div>

        <div >
    
			<a href="../../trei/">
				<div class="lead container3" style="text-align:center;width:100%;padding-bottom:1.5rem;font-size:calc(1rem + 1vw);">
					<span v-if="language == 'it'">Torna alla scuola</span>
					<span v-if="language == 'en'">Back to school</span>
				</div>
			</a>
    
        </div>

        <LayoutFooter :language="language" />
    </div>
</template>

<script>
export default {
    props: {
        dataLista:{
            type:Object,
            default : null
        },
        language:{
            type:String,
			required:true
        }
    }
}
</script>

<style scoped>
    img[src$=".gif"], img[src$=".png"] {
        image-rendering: -moz-crisp-edges;
        image-rendering: -o-crisp-edges;
        image-rendering: -webkit-optimize-contrast;
        -ms-interpolation-mode: nearest-neighbor;
    }

    img {
        border: 0;
    }

    img {
        vertical-align: middle;
    }

    .office-place {
        color: #4b4228;
        font: 16px/1.5 "Novecento Sans Wide Medium", Helvetica, Arial, sans-serif;
        letter-spacing: .2em;
        margin: 25px auto 0 auto;
    }

    .descrizioneLista {
        font-size: calc(15px + 0.17vw + 0.08rem);
    }

    .img-responsive, .thumbnail > img, .thumbnail a > img, .carousel-inner > .item > img, .carousel-inner > .item > a > img {
        display: block;
        width: 100% \9;
        max-width: 90%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0px;
    }

    .imgcaption {
        margin-bottom: calc(1.3rem + 3px);
    }

    figure {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: calc(0.2rem);
    }

    .buttonContainerDiv {
        display: flex;
        margin: auto;
        text-align: center;
        align-content: center;
        align-items: center;
        align-self: center;
        width: 100%;
        max-width: calc(20vw + 30rem + 100px);
        padding-top: 1rem;
        flex-wrap: wrap;
    }

    .buttonLista {
        display: flex;
        margin: auto;
        font-size: calc(0.6rem + 0.5vw);
        text-align: center;
        align-self: center;
        align-content: center;
        align-items: center;
    }

    .programmaElettorale {
        font-size: calc(10px + 1.5vw + 0.3rem);
        padding-top: 4.5rem;
        text-align: left;
    }
</style>

