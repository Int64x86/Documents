<%= "<s" + "cript>" %>
	if (!_GobalModel.get("isedit"))
	require(['../../custom/cUrlImpersonate/settings/'+ _GobalModel.get("state") + '_defaults.js?v=' + Date.now()], function (defaults) {
		BrowserAutomationStudio_EditStart(defaults);
		_GobalModel.attributes["isedit"] = false; $("#executeType").show(); 
	});
<%= "</" + "script>" %>
<div class="container-fluid">
				<div style="display:none;">
					<%= _.template($('#input_constructor').html())({id:"HeadersWindowHeight", description:"", default_selector: "string", value_string: "calc(50vh - 100px)"}) %>
				</div>
				
				  <div id="headers-editor-container"
					style="
					  position: relative;
					  height:calc(50vh - 100px);
					  overflow: hidden;
					  resize: none;
					  margin-left:16px;
					  margin-right:15px;
					  padding-right: 5px;">
					 
					
					<span data-preserve="true" data-preserve-type="constr" data-preserve-id="Headers">
							<div id="Headers" 
								 data-is-code-editor="true" data-force-string="true" data-replace-linebreaks="true" 
								 style="
								   width:100%;
								   height:100%;
								   position:absolute;
								   border:1px solid #e0e0e0;
								 " />
					</span>
					
	
			
					<div class="editor-resizer" style="
						  position: absolute;
						  right: 0;
						  bottom: 0;
						  width: 10px;
						  height: 10px;
						  cursor: nwse-resize;
						  background: repeating-linear-gradient(135deg, #888 0 1px, transparent 1px 4px);
						  mask: linear-gradient(135deg, transparent 7px, #000 0);
						  -webkit-mask: linear-gradient(135deg, transparent 7px, #000 0);
						">
					</div>
					
				  </div>


				<%= "<s" + "cript>" %>
				
					window.Headers = {Editor: null, Ro: null, InitialValue: 'User-Agent: \nAccept: \nSec-Fetch-Site: \nSec-Fetch-Mode: \nSec-Fetch-User: \nSec-Fetch-Dest: \nReferer: \nAccept-Encoding: \nAccept-Language: '}
					require(['vs/editor/editor.main', '../../custom/cUrlImpersonate/editor.js'], function(a, b) {
						try {
							 window.Headers.Editor = createTextEditor(document.getElementById('Headers'), {
									value: window.Headers.InitialValue,
									fixedOverflowWidgets: true,
								   });
								   
							editorSetPlaceholder(window.Headers.Editor, tr("Headers, for example:") + "\nUser-Agent: Mozilla/5.0 Gecko/20100101 Firefox/57.0\nReferer: https://google.com");
								   
					    } catch(e) {
						   prompt("createHeadersEditor", e);
					    }
	   
					});

				<%= "</" + "script>" %>
			
				<div style="text-align:center; display:none">
					<a tabindex="-1"  href="#" data-toggle="modal" data-result-target="#Headers" class="var" style="margin-right:15px">
						<i class="fa fa-at"></i>
						<span class="tr">Insert variable</span>
					</a>
					<a tabindex="-1" href="#" data-toggle="modal" data-result-target="#Headers" class="res">
						<i class="fa fa-database"></i>
						<span class="tr">Load from file, user input, database</span>
					</a>
				</div>
				<div class="col-xs-12" style="margin-bottom: 5px;padding-right: 0px;"></div>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Set request header for subsequent requests with http client.</div>
	<div class="tr tooltip-paragraph-first-fold">The headers field allows setting raw values for subsequent requests with the HTTP client. Supports calling JavaScript code - read more in the GET/POST actions.</div>
	<div class="tr tooltip-paragraph-first-fold">To remove a header, specify it with a colon and no value, for example: `Accept:`. To send a header with an empty value, use a semicolon instead — `Accept;`</div>
	<div class="tr tooltip-paragraph-first-fold">Use 'Clear Headers' action if you want to disable all headers set with this action.</div>
	<div class="tr tooltip-paragraph-last-fold">You can set any valid header, like 'User-Agent', 'Referer', etc. However here is a list of headers that should not be set with this action: 'Connection', 'Host', 'Content-Type'. 'Content-Type' must be set in 'POST' action for a specific request.</div>

</div>
<div style="display: flex; align-items: center; margin-bottom: 5px; width: 100%;">
	<div style="display: flex;  align-items: center; white-space: nowrap;">
		<%= _.template($('#radio').html())({id: "SaveDefaults", name: "GroupDefaults", title: tr("Save current settings as default"), checked: false}) %>
	</div>
							
	<div style="display: flex;  align-items: center; white-space: nowrap;">
		<%= _.template($('#radio').html())({id: "RestoreDefaults", name: "GroupDefaults", title: tr("Restore default settings"), checked: false}) %>
	</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>

<script>

$(document).ready(function () {


	require(['../../custom/cUrlImpersonate/editor.js'], function () {
	  try {
		EditorSetupResizer($("#headers-editor-container"), ".editor-resizer", $("#HeadersWindowHeight"));  
	
		_MainView.once('TriggerEvent', function(event) {
			if (event == "toolbox.editStarted" &&
			_GobalModel.get("state") == "curlImpersonate_SetHeader") {		
				EditorRestoreSize($("#headers-editor-container"), $("#HeadersWindowHeight"), "calc(50vh - 100px)");		
			}
		});  
		
	  } catch(e) {
		  prompt("", e);
	  }
		
		
	});

});

</script>
 