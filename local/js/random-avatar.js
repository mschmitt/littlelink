
$(document).ready(display_random_avatar);
function display_random_avatar(){
    var avatars = $("img.avatar").length;
    var ava_idx = avatars - 1;    
    var random = Math.floor(Math.random() * ava_idx);
    // console.log(avatars + ' avatars to choose from, max index ' + ava_idx + ', random index ' + random + ', thanks for playing.')
    $("img.avatar").eq(random).css({"display":"inline"});
}