module.exports = function (kathaa_inputs, progress, done){
  // Collection of Inputs
  // =================================================================
  //You have access to all the input ports by
  //var input_1 = kathaa_inputs['input_1']
  //var input_2 = kathaa_inputs['input_2']
  //var input_3 = kathaa_inputs['input_3']
  //var input_4 = kathaa_inputs['input_4']
  //var input_5 = kathaa_inputs['input_5']
  //var input_6 = kathaa_inputs['input_6']
  //var input_7 = kathaa_inputs['input_7']
  //var input_8 = kathaa_inputs['input_8']
  //var input_9 = kathaa_inputs['input_9']

  //Lets say you have one SSF input in input_9
  var input_9 = kathaa_inputs['input_9']


  // Preprocessing
  // =================================================================
  //You can parse the SSF sentence, using the shiny new SSF API by
  var parsed_sentence = ssf.parse(input_9);

  // Now lets say, you want to do some operation on all the nodes
  // You can do so, using the following recursive function,
  // (or you are free to get as creative as you want :D )


  // Processing
  // =================================================================

  function recurse(node){
    if(node.instanceType == "Node"){
      // Your Node level Voodoo goes here...

      // You can check the documentation of what parameters you have access to
      // at : https://github.com/spMohanty/ssf-api

      return;
    }else if(node.instanceType == "ChunkNode" || node.instanceType == "Sentence"){
      //Your ChunkNode or Sentence level Voodoo goes here :D

      var childNode;
      for(var _index in node.nodeList){
        childNode = node.nodeList[_index];
        recurse(childNode);
      }
    }
  }
  recurse(parsed_sentence);


  // Post Processing
  // =================================================================
  var output_SSF_sentence = parsed_sentence.printSSFValue();


  // Populate the Module Outputs
  // =================================================================

  var kathaa_outputs = {};
  //Lets say you want to pass on the output to the port named "output_1"
  kathaa_outputs['output_1'] = output_SSF_sentence;

  //Depending on the connections you have in the graph, you can populate the
  // following ports
  //kathaa_outputs['output_1'] = output_SSF_sentence;
  //kathaa_outputs['output_2'] = output_SSF_sentence;
  //kathaa_outputs['output_3'] = output_SSF_sentence;
  //kathaa_outputs['output_4'] = output_SSF_sentence;
  //kathaa_outputs['output_5'] = output_SSF_sentence;
  //kathaa_outputs['output_6'] = output_SSF_sentence;
  //kathaa_outputs['output_7'] = output_SSF_sentence;
  //kathaa_outputs['output_8'] = output_SSF_sentence;
  //kathaa_outputs['output_9'] = output_SSF_sentence;

  // Other Stuff you can do....
  //
  // Mark Progress
  // -----------
  // If you have a time consuming process here, you can mark the progress by
  // progress(30);
  // This says this process is 30% complete
  // Note the scale is from 0-100
  //
  // Mark Errors
  // -----------------------
  // Or say you have a nasty error somewhere, then you simply do a
  //
  // var err = new Error('Your Error Message');
  // done(err);

  // Passback the results to Kathaa Orchestrator
  // =================================================================

  done && done(null, kathaa_outputs);
}