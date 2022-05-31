// Find the smallest integer in the array

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a, b) => a - b)[0]
    }
  }