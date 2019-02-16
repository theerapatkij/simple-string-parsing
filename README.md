# A Simple String Parsing

These software provided 2 javascript functions wrote on html file to solve problems. First find the longest word and second sum all digits in string.

## Getting Started

### Prerequisites

You need **jQuery** to run two functions in `app/simple-string-parsing.js`. 

If you just want only for test or demo in this project. I already provide in `lib/jquery` folder. You don't need to install jQuery again to run.

[jQuery](https://jquery.com/download/)  This link will take you to download and how to install jQuery if you need.



### Installation

Clone a copy git repo by running:

```
git clone git://github.com/theerapatkij/simple-string-parsing.git
```

If you don't have git or don't want to use it. Just download zip file then unzip to your computer.


##Run & Usage

First, open a html file name `app/simple-string-parsing.html` with your browser. 

Put string input in textarea and then click Submit button.

Result (The longest word and sum of all digits) will show below.


## Output given test strings

Example Input 1:
```
'Be 567 yourself;79 everyone 90 else is already 96789 taken.'
```
Result Input 1:
```
longest word : yourself
sum :82
```

Example Input 2:
```
' There are 2 hard problems in computer 798 science: cache invalidation, 23422naming things, and 22 off-by-1 errors.'
```
Result Input 2:
```
longest word : invalidation
sum :44
```

Example Input 3:
```
'   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus. Sit amet commodo nulla facilisi nullam. Tellus elementum sagittis vitae et. Lacus sed viverra tellus in hac habitasse 57   platea dictumst. Odio  234   aenean sed adipiscing diam donec adipiscing. Feugiat pretium nibh ipsum consequat. Nunc mattis enim ut tellus elementum 343 sagittis. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam purus sit amet luctus venenatis. Sed nisi lacus sed viverra tellus in  hac. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Congue nisi vitae suscipit tellus mauris a diam maecenas. Pharetra convallis posuere morbi leo urna molestie. Amet nisl purus in mollis. Lorem mollis aliquam ut porttitor leo.

Convallis a cras semper auctor. Quis eleifend quam adipiscing vitae proin sagittis nisl. Enim praesent elementum facilisis leo vel fringilla est. Tempus quam pellentesque nec nam aliquam sem et tortor. Elit pellentesque habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus. Faucibus vitae aliquet nec ullamcorper sit amet risus. Nulla facilisi etiam dignissim diam. Morbi tristique senectus   et netus.     At tempor commodo ullamcorper a lacus. In pellentesque massa placerat duis. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce.    Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Amet facilisis magna etiam tempor orci. Convallis convallis tellus id interdum velit laoreet id donec. Eu turpis egestas pretium aenean. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean.    Dui accumsan sit amet nulla facilisi morbi.

Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Nibh cras 21234123412341112   pulvinar mattis nunc sed blandit libero. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem.   Maecenas sed enim ut sem viverra aliquet eget. Turpis egestas pretium aenean   pharetra. Posuere sollicitudin aliquam ultrices sagittis orci. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Velit euismod in pellentesque massa. Leo in vitae turpis massa sed. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Dignissim sodales ut eu sem. Donec et odio pellentesque diam. Interdum velit euismod in pellentesque massa. Nisi vitae suscipit tellus mauris. Donec et odio pellentesque diam volutpat commodo sed egestas. Non blandit massa enim nec dui.

Varius duis at consectetur lorem donec. Ac turpis egestas integer eget aliquet 3452   nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Sem nulla     pharetra diam sit amet nisl suscipit adipiscing. Massa tempor nec feugiat nisl pretium fusce id velit. Sed libero enim sed faucibus turpis in eu mi bibendum. Natoque penatibus et magnis dis parturient montes. Nulla facilisi morbi tempus iaculis urna id. Integer enim neque volutpat ac tincidunt. Nisl purus in mollis nunc sed id semper risus in. Eget mauris pharetra et ultrices. ' 
```
Result Input 3:
```
longest word : pellentesque
sum : 82
```

## Tests

I'm also wrote a automated tests with [Mocha](https://mochajs.org/) on HTML file. You can run it by follow below Instruction.

### Run test
Open file `tests/string-parsing-test.html` in browser. Then you will see a functions name and lists of Test case.

If you want to edit Test case. Just open `tests/simple-string-parsing.test.js`.



## Choices, limitations and algorithm performance

I chose javascript in HTML file with **Regular expressions** algorithm for this work. Because function javascript on HTML It's easy run and test to whom that I don't know their environment and Regular expressions helps my code a less complexity and easy to maintain. 

Maybe other algorithm such as **while loop** with **String operations**. It will be faster than Regular expressions. But If a problem grow bigger, very complex or you need to change something. You'll spend much more time to refactoring it.
Regular expressions can do complicated work with reasonably priced in my opinion. 


