package bO;

public class Recipe
{
   private String recipe_name;
   private String recipe_BOID;
   private String recipe_url;
   private String recipe_img;
   
   public Recipe()
   {
      recipe_name = "";
      recipe_BOID = "";
      recipe_url = "";
      recipe_img = "";
   }
   
   public Recipe(String recipe_name, String recipe_BOID, String recipe_url, String recipe_img)
   {
      this.recipe_BOID = recipe_BOID;
      this.recipe_name = recipe_name;
      this.recipe_img = recipe_img;
      this.recipe_url = recipe_url;
   }
   
   public String getRecipe_name()
   {
      return recipe_name;
   }
   public void setRecipe_name( String recipe_name)
   {
      this.recipe_name = recipe_name;
   }
   public String getRecipe_BOID()
   {
      return recipe_BOID;
   }
   public void setRecipe_BOID( String recipe_BOID)
   {
      this.recipe_BOID = recipe_BOID;
   }
   public String getRecipe_url()
   {
      return recipe_url;
   }
   public void setRecipe_url( String recipe_url)
   {
      this.recipe_url = recipe_url;
   }
   public String getRecipe_img()
   {
      return recipe_img;
   }
   public void setRecipe_img( String recipe_img)
   {
      this.recipe_img = recipe_img;
   }
   
   public String toString()
   {
      return "<div><a href=\"" + getRecipe_url() + "\"><img alt=\"" + getRecipe_name() + "\" src=\""+getRecipe_img()+"\" /></a>"
            +"<a href=\"" + getRecipe_url() + "\"><span class=\"thumbnail-text\">"+ getRecipe_name()+"</span></a></div>" ; 
   }
}
