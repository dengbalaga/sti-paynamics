
	function Postulit(eventTarget, eventArgument) {
		var theform;
		
	}

			var strPrintPage = ValidatePrintPage("Default.asp?print=true");
			var strEmailString = "_r=1";
			
			function GetContentWnd(){ return parent; }
			
			function ValidatePrintPage(sz){
				if( (sz.indexOf("\\") >=0) || (sz.indexOf("/") >=0) )
					return "print.asp";
				return sz;
			}
			function OnPrint(){
				OnPrintPage();
				
			}
			function OnPrintPage(){
				var oWnd = GetContentWnd();
				var oDoc = oWnd.document;
				var strLoc = oWnd.location.href;
				strLoc = strLoc.substr(0, strLoc.lastIndexOf("/")+1)+strPrintPage;
				if (window.navigator.userAgent.indexOf("MSIE ")!=-1 && navigator.appVersion.substr(0, 1) >= 4){
					if( oWnd.printHiddenFrame == null){
						oDoc.body.insertAdjacentHTML("beforeEnd", "<iframe name='printHiddenFrame' width='0' height='0'></iframe>");
						framedoc = oWnd.printHiddenFrame.document;
						framedoc.open();
						framedoc.write(
							"<frameset name=test onload='printMe.focus();printMe.print();' rows=\"100%\">" +
							"<frame name=printMe src=\""+strLoc+"\">" +
							"</frameset>");
						framedoc.close();
					}
					else{
						oWnd.printHiddenFrame.printMe.focus();
						oWnd.printHiddenFrame.printMe.print();
					}
				}
				else{
					oWnd.location.href = strLoc;
				}
				return true;
			}
			function OnPrintFrame(){
				var oWnd = GetContentWnd();
				oWnd.focus();
				oWnd.print();
				return true;
			}
			function OnEmail(){
				var oWnd = 	GetContentWnd();
				var oDoc = oWnd.document;
				var oDescription = oDoc.getElementById("Description");
				var strDescription = ( (oDescription == null) || (oDescription.content == "") ) ? oDoc.title : oDescription.content;
				if( oDoc.title == "" )
					oWnd.location.href = "mailto:?body="+BuildEmailDescription(strDescription, AddParamToURL(oWnd.location.href, strEmailString));
				else
					oWnd.location.href = "mailto:?subject="+escape(oDoc.title)+"&body="+BuildEmailDescription(strDescription, AddParamToURL(oWnd.location.href, strEmailString));
				return true;
			}
			function BuildEmailDescription(strDescription,hRef){
				return escape("Here's a great article you might be interested in:" +
							String.fromCharCode(13)+ String.fromCharCode(13) + strDescription + String.fromCharCode(13) + "URL: " + hRef);
			}
			function AddParamToURL(strLoc,strParam){
				var i = strLoc.lastIndexOf("?");
				if(strLoc.indexOf(strParam, i) >= 0)
					return strLoc;

				strLoc += ((i >= 0) && (i > strLoc.lastIndexOf("/"))) ? "&" : "?";
				return strLoc + strParam;
			}
	
			function OnSave(){
				var oWnd = GetContentWnd();
				window.external.addFavorite( oWnd.location.href, oWnd.document.title );
				return true;
			}
					
