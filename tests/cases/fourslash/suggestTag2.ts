/// <reference path='fourslash.ts'/>

// @filename: foo.ts

//// /**
////  * 
////  * @param arg
////  * @suggest {"ooOOo"}
////  */
//// function foo(arg: string) {}

//// foo(/**/);


verify.baselineCompletions();