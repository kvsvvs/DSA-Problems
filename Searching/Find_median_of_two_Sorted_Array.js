function medianOfTwoSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  let x = nums1.length;
  let y = nums2.length;
  let low = 0;
  let high = x;
}
