const posts = [
        { id: 1, title: "Controller Post 1"},
        { id: 2, title: "Controller Post 2"}
    ];



const getAllPosts = (req, res) => {

    
    res.status(200).json({
        message: "Posts fetched successfully",
        data: posts,
        success: true
    });

    
};


const getPostById = (req, res) => {
  try {
    const postId = parseInt(req.params.id);

    const deepuk = posts.find((deep) => deep.id === postId);

    if (!deepuk) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Post fetched successfully",
      data: deepuk,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// module.exports = {
//   getAllPosts,
//   getPostById,
// };


export default { getAllPosts, getPostById };