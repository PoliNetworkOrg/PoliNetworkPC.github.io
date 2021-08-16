<template>
  <div>

    <LayoutNavigationBar language="en" />

    <!-- Page Content -->
    <div class="container2">

      <!-- Jumbotron Header -->
      <header class="jumbotron my-4 testoCentrale" style="border:none;">
        <div style="text-align:center;">
          <h2>Election of student representatives</h2>
          <h4>CCS</h4>
          <br />

          <p class="lead">
            <blockquote>
              DEFINES THE PROGRAMS OF THE DEGREE COURSE SUBJECTS, THE METHODS OF USING THE DIDACTICS, THE ANALYSIS OF THE EFFECTIVENESS OF THE COURSES CARRIED OUT, THE ORGANIZATION OF THE STUDY PLAN, THE DISTRIBUTION OF THE ECTS.
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
          auic:"../ccs/auic/",
          trei:"../ccs/trei/",
          icat:"../ccs/icat/",
          design:"../ccs/design/"
      }
    }
  }
}
</script>
