var SaveDefaults = $("#SaveDefaults").is(':checked')
var RestoreDefaults = $("#RestoreDefaults").is(':checked')
$('#SaveDefaults').prop('checked', false)
$('#RestoreDefaults').prop('checked', false)
if (SaveDefaults || RestoreDefaults) {
	var _action = _GobalModel.get("state");
	var _match = BrowserAutomationStudio_SaveControls().match("Dat:([^\*]+)"); 
	var _state = JSON.stringify(_match ? _match[1] : "");
	var _cmd = `_call_function(impersonate._saveInterfaceState, {
						"fileName": "${_action}_defaults.js",
						"restore": ${RestoreDefaults},
						"state": ${_state}})!; section_start("test",-3)!`;		
	BrowserAutomationStudio_Execute(_cmd);
	if (SaveDefaults) {BrowserAutomationStudio_NotifyInternal("", tr("Found new default settings for")+" "+_action, "");}
	if (RestoreDefaults) {BrowserAutomationStudio_EditEnd(); setTimeout(() => BrowserAutomationStudio_OpenAction(_action), 50); return}
}
var Headers = GetInputConstructorValue("Headers", loader);

try{
    var code = loader.GetAdditionalData() + _.template($("#curlImpersonate_SetHeader_code").html())({
		Headers: Headers["updated"]
    });
    code = Normalize(code, 0);
    BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
}catch(e){}