<template>
    <div>

        <LayoutNavigationBar language="en" />

        <!-- Page Content -->
        <div class="container2">

            <!-- Jumbotron Header -->
            <header class="jumbotron my-4 testoCentrale" style="border:none;">
                <div style="text-align:center;">
                    <h2>Election of student representatives</h2>
                    <br />
                    <h4>Schools</h4>
                    <br />

                    <p class="lead">
                        <blockquote>
                            COORDINATES THE COURSES OF STUDY
                            AND PROVIDES A GENERAL ADDRESS
                            TO THE SCHOOL.
                        </blockquote>
                    </p>
                </div>
            </header>

            <SubpagesScuoleComponent :scuole-link="scuole" language="en" />
        </div>
        <!-- /.container -->

        <LayoutFooter language="en" />
    </div>
</template>

<script>
export default {
    data () {
    return {
      scuole: {
          auic:"../scuola/auic/",
          trei:"../scuola/trei/",
          icat:"../scuola/icat/",
          design:"../scuola/design/"
      }

    }
  }
}
</script>
