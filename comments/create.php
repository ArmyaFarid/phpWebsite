<?php
    include_once('./../config/mysql.php');
    include_once('./../config/user.php');
    include_once('./../variables.php');
?>

<form action="<?php echo($rootUrl . 'comments/post_create.php'); ?>" method="POST">
    <div class="mb-3 visually-hidden">
        <input class="form-control" type="text" name="recipe_id" value="<?php echo $recipeId; ?>" />

    </div>
    <div class="mb-3">
        <label for="comment" class="form-label">Postez un commentaire</label>
        <textarea class="form-control" placeholder="Soyez respectueux/se, nous sommes humain(e)s." id="comment" name="comment"></textarea>
        <h1><?php echo $recipeId; ?></h1>
    </div>
    <button type="submit" class="btn btn-primary">Envoyer</button>
</form>
