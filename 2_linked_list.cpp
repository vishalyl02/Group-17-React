#include<iostream>
using namespace std;
class Node
{
    public:
    int data;
    Node *next;

    Node(int val=0)
    {
        data=val;
        next=NULL;
    }
};
int main()
{
    int n,x;
    cin>>n;
  
  Node *head=NULL;
  Node *p=NULL;
    for(int i=0;i<n;i++)
    {
        cin>>x;
        Node *dt=new Node(x);
        if(i==0)
        {
            p=dt;
            head=dt;
        }
        head->next=dt;
        head=head->next;
    }
  head=p;
    while(head!=NULL)
    {
        cout<<head->data<<" ";
        head=head->next;
    }
    return 0;
}