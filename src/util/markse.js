const marked=require('marked');
const sanitizeHtml=require('sanitize-html');
var turndownService=require('turndown');
function sanitizeMarkdown(markdownContent){
        //convert markdown to html
        const convertHtml=marked.parse(markdownContent);
        //sanitize html
        const sanitizedHtml=sanitizeHtml(convertHtml,{
              allowedTags:sanitizeHtml.defaults.allowedTags
        })
      
         var turn=new turndownService();
         var markdown=turn.turndown(sanitizedHtml);
        return markdown;
}
module.exports={
       sanitizeMarkdown:sanitizeMarkdown
}
