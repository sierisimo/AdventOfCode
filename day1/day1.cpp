#include <iostream>
#include <fstream>
#include <string>

using std::cin;
using std::cout;
using std::endl;

using std::ifstream;

using std::string;

int main(){
  string line;
  ifstream myfile("data.in");

  if(myfile.is_open()){
    getline(myfile,line);

    for(int i = 0; i < line.length(); i++){
      if(line[i] == '(')
        cout<<"Sumo" << endl;
      else
        cout<<"Resto"<< endl;
    }
  }

  return 0;
}
