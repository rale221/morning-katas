// https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript

// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.
// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.
// The following are some examples of how this class is used:

// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
// helper.pageItemCount(0); //should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1


// SOLUTION 1

function PaginationHelper(collection, itemsPerPage){
     this.collection = collection, this.itemsPerPage = itemsPerPage;
   }
   
   PaginationHelper.prototype.itemCount = function() {
     return this.collection.length;
   }
   
   PaginationHelper.prototype.pageCount = function() {
     return Math.ceil(this.collection.length / this.itemsPerPage);
   }
   
   PaginationHelper.prototype.pageItemCount = function(pageIndex) {
     return pageIndex < this.pageCount() 
       ? Math.min(this.itemsPerPage, this.collection.length - pageIndex * this.itemsPerPage)
       : -1;
   }
   
   PaginationHelper.prototype.pageIndex = function(itemIndex) {
     return itemIndex < this.collection.length && itemIndex >= 0
       ? Math.floor(itemIndex / this.itemsPerPage)
       : -1;
   }

// SOLUTION 2


function PaginationHelper(collection, itemsPerPage) {
     this.collection = collection, this.len = this.collection.length, this.ipp = itemsPerPage;
   }
   PaginationHelper.prototype.itemCount = function() {return this.len;}
   PaginationHelper.prototype.pageCount = function() {return Math.ceil(this.len / this.ipp);}
   PaginationHelper.prototype.pageItemCount = function(pageIndex) {
     var pc = this.pageCount();
     return pc <= pageIndex || pageIndex < 0 ? -1 : pc - 1 == pageIndex ? this.len % this.ipp : this.ipp;
   }
   PaginationHelper.prototype.pageIndex = function(itemIndex) {
     return this.len <= itemIndex || itemIndex < 0 ? -1 : Math.floor(itemIndex / this.ipp);
   }

